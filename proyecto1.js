import { neonCursor} from
'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.csn.min.js'

neonCursor ({
    el: document.getElementById('app'),
    shaderPoints: 16,
    cuverPoints: 80,
    curveLerp: 0.5,
    raduis1: 5,
    radius2: 30,
    velocityIreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025
})