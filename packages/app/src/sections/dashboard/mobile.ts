import styled, { css } from 'styled-components'

export const StakingCard = styled.div<{ $noPadding?: boolean }>`
	background: ${(props) => props.theme.colors.selectedTheme.surfaceFill};
	padding: 20px;
	border-radius: 15px;
	border: ${(props) => props.theme.colors.selectedTheme.border};

	.title {
		font-size: 15px;
		color: ${(props) => props.theme.colors.selectedTheme.title};
	}

	.value {
		font-family: ${(props) => props.theme.fonts.monoBold};
		font-size: 26px;
		color: ${(props) => props.theme.colors.selectedTheme.yellow};
		margin-top: 10px;
	}

	${(props) =>
		props.$noPadding &&
		css`
			padding: 0;
			overflow: hidden;
		`}
`

export const SplitStakingCard = styled(StakingCard)`
	display: flex;
	padding: 0;
	cursor: pointer;

	& > div {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 30px 0;
		padding-left: 30px;

		&:first-of-type {
			border-right: ${(props) => props.theme.colors.selectedTheme.border};
		}
	}
`

export const HeaderContainer = styled.div`
	padding: 15px;
`

export const MarketStatsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 8px;
`

export const MarketStat = styled.div`
	border-radius: 8px;
	box-sizing: border-box;
	padding: 10px;
	border: ${(props) => props.theme.colors.selectedTheme.border};
	.title {
		font-size: 12px;
		color: ${(props) => props.theme.colors.selectedTheme.gray};
		margin-bottom: 4px;
	}
	.value {
		font-size: 16px;
		font-family: ${(props) => props.theme.fonts.bold};
		color: ${(props) => props.theme.colors.selectedTheme.text.value};
	}
`
