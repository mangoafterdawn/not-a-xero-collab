#version 120

varying vec4 color;
varying vec2 imageCoord;
uniform vec2 imageSize;
uniform vec2 textureSize;
uniform sampler2D sampler0;
uniform float beat;

uniform sampler2D sampler1;
uniform float limit;
uniform float rate = 0.03;

void main()
{
	vec2 uv = imageCoord;

	vec4 col0 = texture2D(sampler0, uv / textureSize * imageSize);
	vec4 col2 = texture2D(sampler1, fract(beat * rate + vec2(uv.x, 1.0 - uv.y)));

	gl_FragColor = vec4(col0.xyz, step(col2.r, limit)) * color;
}
