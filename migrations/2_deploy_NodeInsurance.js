
const NodeInsurance = artifacts.require("NodeInsurance");
const GIF_PRODUCT_SERVICE_CONTRACT ="0x6520354fa128cc6483B9662548A597f7FcB7a687";
#use the address of the ProductService contract to define GIF core contract#
module.exports = deployer => deployer.deploy(NodeInsurance, GIF_PRODUCT_SERVICE_CONTRACT);
