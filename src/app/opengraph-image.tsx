import { ImageResponse } from 'next/og';

export const alt =
  'Adebayo Stephen — Stephen Tech Studio, AI Backend & Full Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#050505',
          backgroundImage:
            'radial-gradient(ellipse at top left, rgba(0,128,255,0.18) 0%, transparent 55%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '36px',
          }}
        >
          <div
            style={{
              width: '14px',
              height: '14px',
              background: '#0080FF',
              transform: 'rotate(45deg)',
            }}
          />
          <div
            style={{
              color: '#0080FF',
              fontSize: '26px',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            Stephen Tech Studio
          </div>
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: '84px',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          Adebayo Stephen
        </div>
        <div
          style={{
            color: '#9ba3af',
            fontSize: '38px',
            marginTop: '28px',
          }}
        >
          AI Backend & Full Stack Developer
        </div>
        <div
          style={{
            color: '#5b6472',
            fontSize: '26px',
            marginTop: '64px',
          }}
        >
          stephentechstudio.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
