import React, { Component } from "react";
// get our fontawesome imports
import {
  faInfoCircle,
  faShoppingCart,
  faRubleSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Product extends Component {
  constructor(props) {
    super(props);
    const priceForMtCard = this.props.productsData.priceGoldAlt.toFixed(2);
    const priceForMtStd = this.props.productsData.priceRetailAlt.toFixed(2);
    const pricePackage = this.props.productsData.priceGold.toFixed(2);
    const pricePackageStd = this.props.productsData.priceRetail.toFixed(2);
    this.state = {
      goldPriceOrig: priceForMtCard,
      newGoldPrice: priceForMtCard,
      retailPriceOrig: priceForMtStd,
      newRetailPrice: priceForMtStd,
      pricePackageOrig: pricePackage,
      newPricePackage: pricePackage,
      pricePackageStdOrig: pricePackageStd,
      newPricePackageStd: pricePackageStd,
      meter: true,
      typePackage: false,
      quantity: 1,
    };
  }
  handleChange = (event) => {
    let value = event.target.value;
    this.setState(() => ({
      quantity: value,
      newGoldPrice: (this.state.goldPriceOrig * value).toFixed(2),
      newRetailPrice: (this.state.retailPriceOrig * value).toFixed(2),
      newPricePackage: (this.state.pricePackageOrig * value).toFixed(2),
      newPricePackageStd: (this.state.pricePackageStdOrig * value).toFixed(2),
    }));
  };
  changeType = () => {
    this.setState((prevState) => ({
      meter: !prevState.meter,
      typePackage: !prevState.typePackage,
    }));
  };
  componentDidMount() {
    let testImg = document.getElementById("test");
    var pos = testImg.src.lastIndexOf(".");
    let str = testImg.src;
    str = str.substring(0, pos) + "_220x220_1." + str.substring(pos + 1);
  }
  render() {
    const { productsData } = this.props;
    const code = parseInt(productsData.code, 10);
    let str = productsData.primaryImageUrl;
    let position = str.lastIndexOf(".");
    str =
      str.substring(0, position) + "_220x220_1." + str.substring(position + 1);
    const img = str;
    const title = productsData.title;
    const assocProducts = productsData.assocProducts
      .split(";")
      .filter((text) => text !== "");
    const {
      newGoldPrice,
      newRetailPrice,
      typePackage,
      meter,
      newPricePackage,
      newPricePackageStd,
    } = this.state;
    const {
      unit,
      unitRatio,
      unitAlt,
      unitFull,
      unitRatioAlt,
      productId,
    } = productsData;
    const styles = {
      background: "#000",
    };
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
        <div className="productBox">
          <div className="imgRestriction">
            <img id="test" className="img-fluid" src={img} alt="product" />
            <span className="product_status">Наличие</span>
            <div className="price-top">
              <span className="codeOfProduct">Код:{code}</span>
            </div>
          </div>
          <div className="product_description">
            <a href="#" className="product__link">
              {title}
              {/*Ламинат 31 кл Kronospan Kronofix Афцелия Малайская 2,47 м.кв. 7 мм*/}
            </a>
          </div>
          <div className="product_tags hidden-sm">
            <span>
              <b>Могут понадобиться:</b>
            </span>
            {assocProducts.map((text) => (
              <a
                key={text + Math.random() * 100}
                href="#"
                className="url--link"
              >
                {assocProducts.indexOf(text) === assocProducts.length - 1
                  ? `${text}.`
                  : `${text},`}
              </a>
            ))}
          </div>
          <div className="product_price_club_card mt-3">
            <div className="price-club">
              По карте клуба:
              <span className="goldPrice">
                {" "}
                {meter ? newGoldPrice : newPricePackage}
                <FontAwesomeIcon icon={faRubleSign} />
              </span>
              <span className="product_price_default mt-2">
                <span className="retailPrice">
                  {meter ? newRetailPrice : newPricePackageStd}
                  <FontAwesomeIcon icon={faRubleSign} />
                </span>
              </span>
              <span className="info-price">Можно купить за 231,75 балла</span>
            </div>
          </div>

          <div className="typeOfPurchase">
            <span
              onClick={this.changeType}
              className="measure"
              style={meter ? styles : null}
            >
              За м.кв.
            </span>
            <span
              onClick={this.changeType}
              className="measure"
              style={typePackage ? styles : null}
            >
              За упаковку
            </span>
          </div>

          <div>
            <div className="list--unit-desc">
              <div className="unit--info">
                <div className="unit--desc-i">
                  <FontAwesomeIcon icon={faInfoCircle} />
                </div>
                <div className="unit--desc-t">
                  <span>
                    <span className="ng-binding">Продается {unitFull}:</span>
                    <span className="unit--infoInn">
                      {`${unitRatio} ${unit} = ${unitRatioAlt} ${unitAlt}`}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="quantity">
            <input
              step={1}
              min={1}
              className="product__count stepper-input"
              type="number"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <button data-product-id={productId} className="btn-cart">
              <FontAwesomeIcon icon={faShoppingCart} /> В корзину
            </button>
          </div>
          {/*product box end div*/}
        </div>
      </div>
    );
  }
}

export default Product;
