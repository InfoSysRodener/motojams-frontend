<template>
    <l-map
        style="height: 100%; width: 100%; z-index:0"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
    >
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng" ></l-marker>
    </l-map>
</template>
<script>
import { Icon } from 'leaflet';
import { LMap, LTileLayer, LMarker} from 'vue2-leaflet';
// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
export default {
    name:'leafmap',
    components:{
       LMap,
       LTileLayer,
       LMarker,
    },
    data(){
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            zoom: 10,
            center: [14.773301338091992, 121.06285912059924],
            markerLatLng: [14.773301338091992, 121.06285912059924],
            bounds: null
        };
    },
     methods: {
        zoomUpdated (zoom) {
        this.zoom = zoom;
        },
        centerUpdated (center) {
        this.center = center;
        },
        boundsUpdated (bounds) {
        this.bounds = bounds;
        }
    }
}
</script>