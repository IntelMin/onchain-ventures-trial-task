import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import TabButton from 'components/Button/TabButton'
import { TabPanel } from 'components/Tab'
import { useAppSelector } from 'state/hooks'
import { selectSelectedEpoch } from 'state/staking/selectors'
import media from 'styles/media'

import DelegationTab from './DelegationTab'
import EscrowTab from './EscrowTab'
import RewardsTab from './RewardsTab'
import StakingTab from './StakingTab'
import { StakeTab } from './types'

type StakingTabsProp = {
	currentTab: StakeTab
	onChangeTab(tab: StakeTab): () => void
}

const StakingTabs: React.FC<StakingTabsProp> = ({ currentTab, onChangeTab }) => {
	const { t } = useTranslation()
	const selectedEpoch = useAppSelector(selectSelectedEpoch)

	return (
		<StakingTabsContainer>
			<StakingTabsHeader>
				<TabButtons>
					<TabButton
						variant="noOutline"
						title={t('dashboard.stake.tabs.staking.title')}
						onClick={onChangeTab(StakeTab.Staking)}
						active={currentTab === StakeTab.Staking}
					/>
					<TabButton
						variant="noOutline"
						title={t('dashboard.stake.tabs.escrow.title')}
						onClick={onChangeTab(StakeTab.Escrow)}
						active={currentTab === StakeTab.Escrow}
					/>
					<TabButton
						variant="noOutline"
						title={t('dashboard.stake.tabs.delegate.title')}
						onClick={onChangeTab(StakeTab.Delegate)}
						active={currentTab === StakeTab.Delegate}
					/>
				</TabButtons>
			</StakingTabsHeader>
			<div>
				<TabPanel name={StakeTab.Staking} activeTab={currentTab}>
					<StakingTab />
					<RewardsTab
						period={selectedEpoch.period}
						start={selectedEpoch.start}
						end={selectedEpoch.end}
					/>
				</TabPanel>
				<TabPanel name={StakeTab.Escrow} activeTab={currentTab}>
					<EscrowTab />
				</TabPanel>
				<TabPanel name={StakeTab.Delegate} activeTab={currentTab}>
					<DelegationTab />
				</TabPanel>
			</div>
		</StakingTabsContainer>
	)
}

const StakingTabsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
	margin-bottom: 30px;

	${media.lessThan('lg')`
		flex-direction: column;
		row-gap: 10px;
		margin-bottom: 25px;
		margin-top: 0px;
	`}
`

const StakingTabsContainer = styled.div`
	${media.lessThan('lg')`
		padding: 0 15px;
		margin-top: 25px;
	`}
`

const TabButtons = styled.div`
	display: flex;

	& > button:not(:last-of-type) {
		margin-right: 25px;
	}

	${media.lessThan('md')`
		justify-content: flex-start;
	`}
`

export default StakingTabs
