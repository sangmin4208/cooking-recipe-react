// styles
import './ThemeSelector.css'
import modeIcon from '../assets/mode-icon.svg'
import { useTheme } from '../hooks/useTheme'

const themeColors = ['#58249c', '#249c6b', '#b70233']
export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()
  const toggleMode = () => {
    changeMode('dark' === mode ? 'light' : 'dark')
  }
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt="dark/light toggle icon"
          style={{ filter: `invert(${mode === 'dark' ? 100 : 20}%)` }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          ></div>
        ))}
      </div>
    </div>
  )
}
