import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Welcome My Page</h1>
      <div style={{ marginTop: '20px' }}>
        <Link href="/login">
          <button style={buttonStyle}>Đăng nhập</button>
        </Link>
        <Link href="/register">
          <button style={{ ...buttonStyle, backgroundColor: '#4CAF50' }}>Đăng ký</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '12px 24px',
  margin: '10px',
  fontSize: '16px',
  backgroundColor: '#2196F3',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};
