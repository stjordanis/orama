
import {getPath2D} from '../../utils/path2DUtils'

const BRUSH_HANDLE_OFFSET = 5
const HOVER_OFFSET = 10
const HOVER_OFFSET_X2 = HOVER_OFFSET * 2

export const centerArea = (
  {x1, x2, y1, y2, datum, fillAlpha, fill}
) => {
  const path2D = getPath2D()
  path2D.rect(
    x1, y1,
    x2 - x1, y2 - y1
  )
  return {
    fillAlpha,
    data: datum,
    fill,
    hoverAlpha: 0.1,
    path2D,
    type: 'area',
  }
}
export const verticalArea = (
  {x1, x2, plotRect, backgroundOffset, datum, fillAlpha, fill}
) => {
  const path2D = getPath2D()
  path2D.rect(
    x1, plotRect.y - backgroundOffset,
    x2 - x1, plotRect.height + backgroundOffset * 2
  )
  return {
    fillAlpha,
    data: datum,
    fill,
    hoverAlpha: 0.1,
    path2D,
    type: 'area',
  }
}
export const horizontalArea = (
  {y1, y2, plotRect, backgroundOffset, datum, fillAlpha, fill}
) => {
  const path2D = getPath2D()
  path2D.rect(
    plotRect.x - backgroundOffset, y1,
    plotRect.width + backgroundOffset * 2, y2 - y1
  )
  return {
    fillAlpha,
    data: datum,
    fill,
    hoverAlpha: 0.1,
    path2D,
    type: 'area',
  }
}
export const rightTopLine = (
  {x2, y1, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(x2 - BRUSH_HANDLE_OFFSET, y1)
  path2D.lineTo(x2, y1)
  path2D.lineTo(x2, y1 + BRUSH_HANDLE_OFFSET)
  hover1stPath2D.rect(
    x2 - HOVER_OFFSET, y1 - HOVER_OFFSET,
    HOVER_OFFSET_X2, HOVER_OFFSET_X2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}
export const rightBottomLine = (
  {x2, y2, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(x2 - BRUSH_HANDLE_OFFSET, y2)
  path2D.lineTo(x2, y2)
  path2D.lineTo(x2, y2 - BRUSH_HANDLE_OFFSET)
  hover1stPath2D.rect(
    x2 - HOVER_OFFSET, y2 - HOVER_OFFSET,
    HOVER_OFFSET_X2, HOVER_OFFSET_X2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}
export const leftTopLine = (
  {x1, y1, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(x1, y1 + BRUSH_HANDLE_OFFSET)
  path2D.lineTo(x1, y1)
  path2D.lineTo(x1 + BRUSH_HANDLE_OFFSET, y1)
  hover1stPath2D.rect(
    x1 - HOVER_OFFSET, y1 - HOVER_OFFSET,
    HOVER_OFFSET_X2, HOVER_OFFSET_X2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}
export const leftBottomLine = (
  {x1, y2, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(x1, y2 - BRUSH_HANDLE_OFFSET)
  path2D.lineTo(x1, y2)
  path2D.lineTo(x1 + BRUSH_HANDLE_OFFSET, y2)
  hover1stPath2D.rect(
    x1 - HOVER_OFFSET, y2 - HOVER_OFFSET,
    HOVER_OFFSET_X2, HOVER_OFFSET_X2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}
export const leftVerticalLine = (
  {x1, plotRect, backgroundOffset, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(x1, plotRect.y - backgroundOffset + BRUSH_HANDLE_OFFSET)
  path2D.lineTo(
    x1, plotRect.y + plotRect.height + backgroundOffset - BRUSH_HANDLE_OFFSET
  )
  hover1stPath2D.rect(
    x1 - HOVER_OFFSET, plotRect.y - backgroundOffset,
    HOVER_OFFSET_X2, plotRect.height + backgroundOffset * 2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}
export const leftCenterLine = (
  {x1, y1, y2, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(
    x1, y1 + BRUSH_HANDLE_OFFSET)
  path2D.lineTo(
    x1, y2 - BRUSH_HANDLE_OFFSET)
  hover1stPath2D.rect(
    x1 - HOVER_OFFSET, y1 + BRUSH_HANDLE_OFFSET,
    HOVER_OFFSET_X2, y2 - y1 - BRUSH_HANDLE_OFFSET * 2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}
export const rightVerticalLine = (
  {x2, plotRect, backgroundOffset, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(
    x2, plotRect.y - backgroundOffset + BRUSH_HANDLE_OFFSET)
  path2D.lineTo(
    x2, plotRect.y + plotRect.height + backgroundOffset - BRUSH_HANDLE_OFFSET)
  hover1stPath2D.rect(
    x2 - HOVER_OFFSET, plotRect.y - backgroundOffset,
    HOVER_OFFSET_X2, plotRect.height + backgroundOffset * 2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}
export const rightCenterLine = (
  {x2, y1, y2, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(
    x2, y1 + BRUSH_HANDLE_OFFSET)
  path2D.lineTo(
    x2, y2 - BRUSH_HANDLE_OFFSET)
  hover1stPath2D.rect(
    x2 - HOVER_OFFSET, y1 + BRUSH_HANDLE_OFFSET,
    HOVER_OFFSET_X2, y2 - y1 - BRUSH_HANDLE_OFFSET * 2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}
export const topHorizontalLine = (
  {y1, plotRect, backgroundOffset, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(
    plotRect.x - backgroundOffset + BRUSH_HANDLE_OFFSET, y1
  )
  path2D.lineTo(
    plotRect.x + plotRect.width + backgroundOffset - BRUSH_HANDLE_OFFSET, y1
  )
  hover1stPath2D.rect(
    plotRect.x - backgroundOffset, y1 - HOVER_OFFSET,
    plotRect.width + backgroundOffset * 2, HOVER_OFFSET_X2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}
export const topCenterLine = (
  {x1, x2, y1, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(x1 + BRUSH_HANDLE_OFFSET, y1)
  path2D.lineTo(x2 - BRUSH_HANDLE_OFFSET, y1)
  hover1stPath2D.rect(
    x1, y1 - HOVER_OFFSET,
    x2 - x1, HOVER_OFFSET_X2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}
export const bottomHorizontalLine = (
  {y2, plotRect, backgroundOffset, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(
    plotRect.x - backgroundOffset + BRUSH_HANDLE_OFFSET, y2
  )
  path2D.lineTo(
    plotRect.x + plotRect.width + backgroundOffset - BRUSH_HANDLE_OFFSET, y2
  )
  hover1stPath2D.rect(
    plotRect.x - backgroundOffset, y2 - HOVER_OFFSET,
    plotRect.width + backgroundOffset * 2, HOVER_OFFSET_X2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}
export const bottomCenterLine = (
  {x1, x2, y2, datum, stroke, lineWidth}
) => {
  const path2D = getPath2D()
  const hover1stPath2D = getPath2D()
  path2D.moveTo(x1 + BRUSH_HANDLE_OFFSET, y2)
  path2D.lineTo(x2 - BRUSH_HANDLE_OFFSET, y2)
  hover1stPath2D.rect(
    x1, y2 - HOVER_OFFSET,
    x2 - x1, HOVER_OFFSET_X2
  )
  return {
    lineWidth,
    stroke,
    data: datum,
    path2D,
    hover1stPath2D,
    type: 'line',
  }
}