import React from 'react'

type Props = {}

const User = (props: Props) => {
   
    const {user} = JSON.parse(localStorage.getItem('user')!)
    console.log(user)
  return (
    <div>
          <div class="container-xxl py-5">
              <div class="container">
                  <div class="row g-5 align-items-center">
                      <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                          <div class="about-img position-relative overflow-hidden p-5 pe-0">
                              <img class="img-fluid w-100" src={user.image}/>
                          </div>
                      </div>
                      <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                          <h1 class="display-5 mb-4">{user.name}</h1>
                         <span class="mb-4"> Email: <h5>{user.email}</h5></span>
                        
                          <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Đổi mật khẩu</a>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default User