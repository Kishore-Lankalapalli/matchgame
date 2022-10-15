import './index.css'

const TabItem = props => {
  const {tab, isActive, onChangeTabId} = props

  const {tabId, displayText} = tab

  const onClickTab = () => {
    onChangeTabId(tabId)
  }

  const tabClassName = isActive ? 'active-tab' : 'tab-text'

  return (
    <li>
      <button type="button" onClick={onClickTab} className="tab-button">
        <p className={tabClassName}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
