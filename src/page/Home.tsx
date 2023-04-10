import React, { useEffect, useState } from 'react'
import '../../src/styleclient.css'

type Props = {
    products: {
        data: IProduct[]
    }
}
import '@fortawesome/fontawesome-free/css/all.min.css'
import { IProduct } from '../interface/product'
import { Link } from 'react-router-dom'
import { getAllCat, getOneCat } from '../api/category'
import { ICategory } from '../interface/category'
const Home = ({ products }: Props) => {
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
        <>
            <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s" >
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="https://themewagon.github.io/foody2/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7">
                                            <h1 className="display-2 mb-5 animated slideInDown">Organic Food Is Good For Health</h1>
                                            <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                                            <a href="" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7">
                                            <h1 className="display-2 mb-5 animated slideInDown">Natural Food Is Always Healthy</h1>
                                            <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                                            <a href="" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="container-fluid bg-light bg-icon my-5 py-6">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ marginLeft: '500px' }}>
                        <h1 className="display-5 mb-3">Our Features</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src="https://themewagon.github.io/foody2/img/icon-1.png" alt="" />
                                <h4 className="mb-3">Natural Process</h4>
                                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src="https://themewagon.github.io/foody2/img/icon-2.png" alt="" />
                                <h4 className="mb-3">Organic Products</h4>
                                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src="	https://themewagon.github.io/foody2/img/icon-3.png" alt="" />
                                <h4 className="mb-3">Biologically Safe</h4>
                                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                            </div>
                        </div>
                    </div>
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
                                {cat.map((data:ICategory)=><li className="nav-item me-2">
                                    <a className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1" onClick={() => handleCat(data._id)} >{data.name}</a>
                                </li>
                                
                                )}
                                
                                
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {product ? product.map((data:IProduct) => <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
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
        </>

    )
}

export default Home