#version 120

varying vec4 color;
varying vec2 imageCoord;
uniform vec2 imageSize;
uniform vec2 textureSize;
uniform sampler2D sampler0;
uniform sampler2D sampler1;


vec2 img2tex( vec2 v ) { return v / textureSize * imageSize; }
void main()
{
    vec2 rat = textureSize / imageSize;
    vec2 uv = imageCoord;
    vec2 bepis = img2tex( uv * rat );

	vec3 col1 = texture2D( sampler0, img2tex(uv)).rgb;
	vec3 col2 = texture2D( sampler1,  vec2( bepis.x, 1.0 - bepis.y)).rgb;


    //vec3 col = vec3(0.0);

    //Exclusion
	//col1 = 0.5-2.0*(col1-0.5)*(col2-0.5);

    //Color Dodge
	//col1 = col1/(1.0-col2);

    //Color Burn
	//col1 = 1.0-(1.0-col1)/col2;

    //Difference
	//col1 = abs(col1-col2);


	gl_FragColor = vec4( col1, 1.0 )*color;
}
