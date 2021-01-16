#version 120

varying vec4 color;
varying vec2 imageCoord;
uniform vec2 imageSize;
uniform vec2 textureSize;
uniform sampler2D sampler0;
uniform sampler2D sampler1;
uniform float limit = 0.5;

vec2 img2tex(vec2 v) {
	return v / textureSize * imageSize;
}

void main()
{
	vec2 uv = imageCoord;

	vec4 col0 = texture2D(sampler0, img2tex(uv));
	vec4 col2 = texture2D(sampler1, vec2(uv.x, 1.0 - uv.y));

	gl_FragColor = vec4(col0.xyz, step(col2 - limit)) * color;
}
