import React, { useState } from "react";
import { IsAuthentication } from "./authentication";
import { ChangePassword } from "./changePassword";

import { Container, Password, Authentication, Activities } from "./style";

import { ProfileAccountActivity, ProfileAuthDetails, ProfileSecurity } from "src/containers";

//import { ProfileScreen } from "src/screens/ProfileScreen";

export function Security(props) {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isAuthentication, setIsAuthentication] = useState(false);

  function hendleChangePassword() {
    setIsChangePassword(!isChangePassword);
    setIsAuthentication(false);
  }

  function hendleIsAuthentication() {
    setIsAuthentication(!isAuthentication);
    setIsChangePassword(false);
  }

  return (
    <Container>
      
         
          <ProfileSecurity />
          {/* <br />
          <br /> */}
          <ProfileAccountActivity />
          
      
    </Container>
  );
}
