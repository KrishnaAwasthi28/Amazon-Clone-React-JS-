import { PiShoppingCartBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
const Header=()=>{
    return <><nav class="head1">
    <div class="navlogo border-my">
        <img src="amazon3.png" alt="" id="logo"/>
    </div>
    <div class="address border-my">
        <p class="add1">Deliver to</p>
        <div class="address2">
        <IoLocationOutline className="location"/>
            <p class="add2">India</p>
        </div>
    </div>
    <div class="searchbar border-my">
        <select name="" id="category">
            <option value="">All</option>
        </select>
        <input type="text" placeholder="Search Amazon.com" id="search"/>
        <div id="searchbtn"><IoSearch className="searchbtn" /></div>
    </div>
    <div class="language border-my">
        <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="" height="15px" width="20px"/>
        <select name="" id="lang">
            <option value="">EN</option>
        </select>
    </div>
    <div class="account border-my">
        <p class="signin">Hello, sign in</p>
        <div class="list-my">
            <select name="" id="acc">
                <option value="">Account & Lists</option>
            </select>
        </div>
    </div>
    <div class="navreturn border-my">
        <p class="return">Returns</p>
        <div class="order">
            <p>& Orders</p>
        </div>
    </div>
    <div class="navcart border-my">
    <PiShoppingCartBold className="cart-logo" />
        <div class="cart">
            <p>Cart</p>
        </div>
    </div>
</nav>
<nav class="head2">
            <div class="h2all border-my">
                <FiMenu className="all"/>
                <p id="all">All</p>
            </div>
            <div class="deal border-my">
                <p>Today's Deals</p>
            </div>
            <div class="service border-my">
                <p>Customer Service</p>
            </div>
            <div class="service border-my">
                <p>Buy Again</p>
            </div>
            <div class="service border-my">
                <p>Gift Cards</p>
            </div>
            <div class="service border-my">
                <p>Sell</p>
            </div>
        </nav>
        </>
};
export default Header;