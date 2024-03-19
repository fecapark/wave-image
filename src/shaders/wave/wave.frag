precision mediump float;

uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec2 vUv;

vec3 addGammaToTexture(vec3 texture, float gamma) {
    return pow(texture, vec3(1.0 / gamma));
}

void main() {
    vec3 texture = texture2D(uTexture, vUv).rgb;
    gl_FragColor = vec4(addGammaToTexture(texture, 2.2), 1.0);
}