import React, { useEffect, useState } from 'react'
import { getOne } from '../api/product'
import { Link, useParams } from 'react-router-dom'
import { getAllCat, getOneCat } from '../api/category'

type Props = {}

const Product = ({products}: Props) => {
    console.log(products)
    const [product, setproduct] = useState([])
    const [cat, setcat] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await getAllCat()
            setcat(data)

        })()
    }, [])
    console.log(cat)
    useEffect(() => {
        setproduct(products.data)
    }, [products])

    const handleCat = async (id: number | string) => {


        (async () => {
            const { data } = await getOneCat(id)
            setproduct(data.products)
        })()


    }
  return (
    <div>
        
          <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
              <div class="container">
                  <h1 class="display-3 mb-3 animated slideInDown">Products</h1>
                  <nav aria-label="breadcrumb animated slideInDown">
                      <ol class="breadcrumb mb-0">
                          <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                          <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>
                          <li class="breadcrumb-item text-dark active" aria-current="page">Products</li>
                      </ol>
                  </nav>
              </div>
          </div>


          <div className="container-xxl py-5">
              <div className="container">
                  <div className="row g-0 gx-5 align-items-end">
                      <div className="col-lg-6">
                          <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s">
                              <h1 className="display-5 mb-3">Our Products</h1>
                              <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                          </div>
                      </div>
                      <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                          <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                              {cat.map((data: ICategory) => <li className="nav-item me-2">
                                  <a className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1" onClick={() => handleCat(data._id)} >{data.name}</a>
                              </li>

                              )}


                          </ul>
                      </div>
                  </div>
                  <div className="tab-content">
                      <div id="tab-1" className="tab-pane fade show p-0 active">
                          <div className="row g-4">
                              {product ? product.map(data => <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                  <div className="product-item">
                                      <div className="position-relative bg-light overflow-hidden">
                                          <img className="img-fluid w-100" src={data?.image} alt="" />
                                          <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                      </div>
                                      <div className="text-center p-4">
                                          <a className="d-block h5 mb-2" href="">{data?.name}</a>
                                          <span className="text-primary me-1">${data?.price}</span>
                                          <span className="text-body text-decoration-line-through">$29.00</span>
                                      </div>
                                      <div className="d-flex border-top">
                                          <small className="w-50 text-center border-end py-2">
                                              <Link to={`/product/${data?._id}`}><a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a></Link>
                                          </small>
                                          <small className="w-50 text-center py-2">
                                              <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                          </small>
                                      </div>
                                  </div>
                              </div>) : ''}


                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Product