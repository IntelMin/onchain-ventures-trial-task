import { PositionSide } from '@kwenta/sdk/types'
import { formatPercent, formatDollars } from '@kwenta/sdk/utils'
import Wei, { wei } from '@synthetixio/wei'
import { useMemo } from 'react'
import styled from 'styled-components'

import { Body } from 'components/Text'

type ShowPercentageProps = {
	targetPrice: string
	isStopLoss?: boolean
	price: Wei
	leverageSide: PositionSide | string | undefined
	leverageWei: Wei
	sizeWei: Wei
}

const ShowPercentage: React.FC<ShowPercentageProps> = ({
	targetPrice,
	isStopLoss = false,
	price,
	leverageSide,
	leverageWei,
	sizeWei,
}) => {
	const isLoss = useMemo(() => {
		if (!targetPrice || !price || !leverageSide) return false

		const targetPriceWei = wei(targetPrice)
		const positiveDiff = targetPriceWei.gt(price)

		return leverageSide === 'short' ? positiveDiff : !positiveDiff
	}, [price, targetPrice, leverageSide])

	const [calculatePercentage, calculatePL] = useMemo(() => {
		if (!targetPrice || !price || !leverageSide || !sizeWei) return ''
		const priceWei = wei(targetPrice)

		const diff =
			leverageSide === 'short'
				? isStopLoss
					? priceWei.sub(price)
					: price.sub(priceWei)
				: isStopLoss
				? price.sub(priceWei)
				: priceWei.sub(price)

		const percentage = diff.div(price).mul(leverageWei)
		const profitLoss = sizeWei.mul(percentage.div(leverageWei)).mul(isStopLoss ? -1 : 1)

		return [
			formatPercent(percentage),
			formatDollars(profitLoss, { sign: profitLoss.lt(0) ? '' : '+' }),
		]
	}, [price, isStopLoss, leverageSide, leverageWei, targetPrice, sizeWei])

	return (
		<Body size="large" mono>
			<ProfitLoss isLoss={isLoss}>{calculatePL}</ProfitLoss>
			{calculatePercentage}
		</Body>
	)
}

const ProfitLoss = styled.span<{ isLoss: boolean }>`
	margin-right: 0.7rem;
	color: ${({ theme, isLoss }) =>
		isLoss
			? theme.colors.selectedTheme.newTheme.text.negative
			: theme.colors.selectedTheme.newTheme.text.positive};
`

export default ShowPercentage
