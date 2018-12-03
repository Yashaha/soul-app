export default {
  changeSoulNavCurrent (state, current) {
    state.soulNavCurrent = current
  },
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
  changeSoulAddIsShow (state, is) {
    state.soulAdd.isShow = is
  },
  changeSoulChatIsSpreadOperate (state, is) {
    state.soulChat.isSpreadOperate_gobal = is
  },
  changeSoulSelfTopY (state, topY) {
    state.soulSelf.topY = topY
  }
}
