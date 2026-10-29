import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { areas } from '../data'

// all the points together, so the map can zoom to fit every area
const allPoints = areas.flatMap((area) => area.shape)

// Full coverage = solid navy, select streets = dashed blue outline (same as the legend)
function getStyle(area, isActive) {
  const isFull = area.status === 'Full coverage'

  return {
    color: isFull ? '#1f3550' : '#4f7fa6',
    weight: isActive ? 4 : 2,
    dashArray: isFull ? null : '8 6',
    fillColor: isFull ? '#1f3550' : '#8fb8d6',
    fillOpacity: isActive ? 0.6 : isFull ? 0.4 : 0.3,
  }
}

function CoverageMap({ activeArea, onAreaHover }) {
  return (
    <MapContainer bounds={allPoints} scrollWheelZoom={false} className="leaflet-map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {areas.map((area) => (
        <Polygon
          key={area.name}
          positions={area.shape}
          pathOptions={getStyle(area, activeArea === area.name)}
          eventHandlers={{
            mouseover: () => onAreaHover(area.name),
            mouseout: () => onAreaHover(null),
          }}
        >
          <Tooltip sticky>
            <b>{area.name}</b> · {area.status}
          </Tooltip>
        </Polygon>
      ))}
    </MapContainer>
  )
}

export default CoverageMap
