export default {
  changeSoulSquare (state, soulSquare) {
    state.soulSquare.contentIndex = soulSquare.contentIndex
    state.soulSquare.movingEvent = soulSquare.movingEvent
  },
  changeSoulSquareContentIndex (state, contentIndex) {
    state.soulSquare.contentIndex = contentIndex
  },
  changeSoulSquareMovingEventDirection (state, direction) {
    state.soulSquare.movingEvent.direction = direction
  },
  changeSoulSquareMovingEventTopY (state, topY) {
    state.soulSquare.movingEvent.topY = topY
  },
  changeSoulChatIsSpreadOperate (state, is) {
    state.soulChat.isSpreadOperate_gobal = is
  }
}
