import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import HeroSection from './components/HeroSection/HeroSection'
import CardSlider from './components/CardSlider/CardSlider'
import Summary from './components/Summary/Summary'
import References from './components/References/References'

function App() {
  const [summaryVisible, setSummaryVisible] = useState(false)
  const [selectedSummary, setSelectedSummary] = useState("")
  const [selectedTitle, setSelectedTitle] = useState("")
  const [selectedImage, setSelectedImage] = useState("")
  const [selectedGenially, setSelectedGenially] = useState("")
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  const [cardSliderVisible, setCardSliderVisible] = useState(true)

  const showSummary = (title, summary, image, genially, cardIndex) => {
    setSelectedSummary(summary)
    setSelectedTitle(title)
    setSelectedImage(image)
    setSelectedCardIndex(cardIndex)
    setSelectedGenially(genially)
    setSummaryVisible(true)
    setCardSliderVisible(false)
  }

  const closeSummary = (cardIndex) => {
    setSummaryVisible(false)
    console.log(cardIndex)
    setSelectedCardIndex(cardIndex)
    setCardSliderVisible(true)
    setSelectedSummary("")
    setSelectedImage("")
    setSelectedTitle("")
  }

  return (
    <div className="app">
      <HeroSection/>
      <CardSlider
        visible={cardSliderVisible}
        cardIndex={selectedCardIndex}
        onCardClick={showSummary}
      />
      <Summary
        visible={summaryVisible}
        title={selectedTitle}
        summary={selectedSummary}
        image={selectedImage}
        genially={selectedGenially}
        onClick={() => closeSummary(selectedCardIndex)}
      />
      <References/>
    </div>
  )
}

export default App
