precision mediump float;

uniform vec2 uMousePos;
uniform float uRadius;

varying vec2 vUv;

#define PI 3.1415926535897932384626433832795

float wave_cos(float x, float maxDist) {
    float xFactor = PI / maxDist;

    x = max(min(x, maxDist), -maxDist);
    x *= xFactor;
    
    return (cos(x) / 2.0) + 0.5;
}

float wave_cos_repeat(float x, float maxDist, float repeat) {
    float xFactor = PI / maxDist;
    float repeated = ceil(x / maxDist);
    float scaleFactor = pow(0.8, repeated - 1.0);

    x = max(min(x, maxDist * repeat), -maxDist * repeat);
    x *= xFactor;
    
    return ((cos(x) / 2.0) + 0.5) * scaleFactor;
}

float mouse_z(vec3 pos) {
    float dist = distance(vec2(pos.x, pos.y), uMousePos);
    return wave_cos(dist, 0.4);
}

float click_z(vec3 pos) {
    float dist = distance(vec2(pos.x, pos.y), uMousePos);
    float radiusDist = uRadius - dist;

    return wave_cos(radiusDist, 0.2);
}

void main() {
    vUv = uv;
    vec3 pos = position;

    if (uRadius > 0.0) pos.z = click_z(pos) * 0.5;
    else pos.z = mouse_z(pos) * 0.6;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}