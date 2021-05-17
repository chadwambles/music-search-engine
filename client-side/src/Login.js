import React from "react"
import { Container } from "react-bootstrap"
import "./background.css";
const auth =
  "https://accounts.spotify.com/authorize?client_id=72a2e61febc24e8ba2c7a7842ca482c9&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      id="login-bckg"
      style={{ minHeight: "100vh"}}
    >
      <a className="btn btn-success btn-xl" href={auth}>
        Spotify Login
      </a>
    </Container>
  )
}
