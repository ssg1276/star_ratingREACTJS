import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex)
  }
  function handleMousemove(getCurrentIndex) {
    setHover(getCurrentIndex)
  }
  function handleMouseLeave() {
    setHover(rating)
  }
  return (
    <div className="flex flex-row">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1
        return (
          <FaStar
            key={index}
            className={`text-lg ${
              index <= (hover || rating) ? 'text-yellow-400' : 'text-black'
            }`}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMousemove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        )
      })}
    </div>
  )
}
