import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

export default function 실습() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<Cart />} />

                    <Route path="/users" element={<Users />} />
                    <Route path="/users/coupon" element={<CouponPage />} />
                    <Route path="/users/question" element={<QuestionPage />} />
                    <Route path="/users/notice" element={<NoticePage />} />

                    <Route path="/products:id" element={<ProductDetailPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function HomePage() {
    return <h1>홈페이지</h1>;
}

function Cart() {
    return <h1>Cart</h1>;
}

function Users() {
    return <h1>Users</h1>;
}

function ProductDetailPage() {
    const { id } = useParams();
    return <h1>{id}번 상품입니다~!</h1>;
}

function CouponPage() {
    return <h1>쿠폰</h1>;
}

function NoticePage() {
    return <h1>알림</h1>;
}
function QuestionPage() {
    return <h1>?</h1>;
}