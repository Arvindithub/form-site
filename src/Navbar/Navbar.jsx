import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
//import { Body } from "../Body/Body";





export const Navbar = () => {

    return (
        <div style={{ border: "1px solid red",backgroundColor:"white" ,borderRadius: "5px", height: "100px" ,width:"100%",position: "fixed",zIndex:"1000",
        top: "0",
        left: "0",
        width: "100%",
         }}>
    <div style={{ display: "flex"}}>
        <div> <Link to="/">
            <img style={{ height: "90px",marginTop:"5px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAACLCAMAAAB/aSNCAAAAw1BMVEX///8LPGDu8vXz9fcAKFQAKlUANVv3+foAJVIAMFgAOV7AydEAH0/b4OUAOF/Q1dtpfJDj6OyXprSeqbW5w8zGz9YAL2gAMlkALVYAK2YAIlAAQnOissNGbo8ANWsAR3YbRGYAOG2In7SUqLuqusk4ZIkTUXwAPG9igp5zj6h/kaK9ytUhV4F+l65zh5oARXROaYI7WnZYepk+aIwAJWMRRGcADkgAGkw2V3SImKhddYuuucN2kakAFl0aVX8pUHAABkVKe8SJAAAQEElEQVR4nO1daXuiOhtGEINURKwg7nW3btPqbNZ52/P/f9ULJIGQTezpcp1O7i8zEpbkzsOzhlTTFBQUFBQUFBQUFBQ+Eg71G3xKL/4GeP+juO5tPqcjXx+TI3VgN/iUfvwF+EYLsdfxPqUjXx6bHnNoMPmEfvwF4PC66SnL+A5wAo62GLU+viNfH7sD5+CUtpQK/x5g6XOO6kPa11b415gtuIdXfz64H38B5lPuYXdsfHBHvjycQOc3bGcf25Gvj/uVoKG//dB+fH0YgStqGYpaFF4FiewK5V3hVRiJNbLTEWhxhdfAX0oCcIFvovAqLGTZ0okS6zeEsxRL7qajpPot4XwXKWunoxzrt8Wmw0uBaJreUynrt0Z/zKu4gOf7D+/J18duxMl2DFR18T1wmDOH7heqCvMumNPFgelYuXnvA6O3i//x/M3GjTmefVd1gfeCN+z7h/FwsX3uBYvJZqhW3LwfJsFo5+tAA4YzGwRzpajfC2C17OsAGAmA5hzGSqzfB8Z27iGeIbRZp//Znfpvw+UnoMH2kCM6lmxfEJXPlL0sBEEZcTWnmY643nS4pI6UZimGBY+ozdBjmI50yI5XnnGGyt8uhnteXmMxZYU6gs6rz/TVmqeC2Iw4x3o6j2kD8KqOA5XBLgje6rDVH65QG4bHngzU6rLCOLI+XG8joJpzss95KxT4mDKpUS/gGcVEg0wY33CnlisUhhPQIbfbEzAdKWsmt7pQi66Lg/l0yx8J9IcBZs/UubqqoF+B1Y46IKOaluqZWsV3BZjF1N6Q7+tFVE/pgsFBFXavgE5/JQeGroBqllm1XvIqMKumB/xgMQoXe9SqBXf4Yb38EpjQWmG25VMNNstLlypI4Y6pA2DMj2HAnNYf6jOCK8Eo3OkC8DBbUqtDGDWPYbRuBMhfYPinxuPLjx8vD/szE+An5/s3fgrX9agYwM1u7LDXJmjpZIfo/rq3+4f4+U/rVqHvfHR0V8ZEOehpF65n3Yj5YTrtR5gl2CAsaRlu8b8Ei5yYf0w+fp6Js9xGWK5W7BiVdmjdnXI+OijTF5fLVrf+uCaG+dTFbd3H3MB/Zk90iQM/c1TozR9WtVKHzzfLTwVM/PoX6gkd9zVhwz8XrmedY+8QYXA4zEe9CKP5fLtYLEbMt3SMS55eb5X4CLOxeg9WJddmV801MQJQ596h3rZ+pxLcyO5gkYO/rabHy5DqcvLDvCHZqVZt8s4V6+miZJfQFeaZamjCJ9YuXO9+v+fWw93VaHQ8DLa97ZQbE7pLkVddgOozRXSCaimTLAHVMdtdfBeC6hyLD9lxEdX6o8ncuF2/INitMjrTfqRaClKtufMR+wx3O965Rqyjvdkx4JA66exEKxYuU33in2HX0rkQU10qdVF3Carb6+zxoJ2dKqDaq3BmumRb5ISxeEov6lKmpSjVkSH8TuuCyfeJoWHXI+J9QVkUb7sQZ6pTqm0KJmKymTJtV6phWM3GnXKdUo2vJSn5Ac8hqLbvsse75exUPtV6Gd/Oblejx6e/yrJdTwgJau/zTcWp1hyKuVXP1Ug/D+yCXPjSZ+ZG0KeM5lJGdauLW0270ez3m091E4/WQv3IpBqzXK+Usbiat8k5BNWlWqbkmpmqFlD9gm9pvqxvz81GPUSnV2jNwOEzQZfbVIRqTdt9J0pXq4VHudZan/ic0Tt+4692x+2Q6lDg+xhYisKX9IzWHRqH/QIPIKqrt9l1wFkjBWv/Tg6QVIeZpXokdA+X6hNiNnzEY7ptoy5ZEn/th819XIyrqNbc0Ry/PdMezXTE9bSH5WY2XMnXlSGqTUG3G0g4zXXuKBq/2Ux+cqiO0EJcl5O+IKoTBioNfA6A70xdSDV+6crE8z3kXKBJ5MEvZ08r1V9ybddRrYH7AHrOTuBzwkVwgAUb/fKiMjnVHlIf5il/vAG7a9eTeeRTjdmFpMEf9kMy+hCfcgOn46EuohpNdTWnbx30VllCEwSNoo2UT/68K6nWtM1yEEvLdqKxTBvAW7aScw4XywFyqtdwpJUHuuG3TbybAqpbIXEOpLoNx5mOPbm//biuCKjW0ZTm5VI7VWMjHf5aa3wYNUQxnOxKbqKuplozDsON1hJUvEA/ig5XRb7yklON1Adr7NEbWk9Mk4Bq32SoNt0wd2Yidu3TXkT1OeT2TrfMbp2TIMCAcVE0QUhUQlKJXk91pIc79/O+qAwzmoyORSpcUqpd2Fh5YpuQWHfjZ4ik2iRuDakuO8mrbaO3RK9B/hsiqmGAY9u0vTm1pGODRjHqj9MlZhvhNVRr+lGw4iauwgyLLbCRUo16ZXKiBRRQJ9cJqEYiZSWvBKYaXleF3EGh/aWJqAbQeeRNtQzIWY99SigROQUkpnojWSgzWfE0dUK1E0iyBMQtpVQjw1bmiJADRbYa20s+1Q58+VHAgtl0rIxVLVEcUeQsohp1jp7DS4C3SwzMLexEmQixxVSvgnlfFBeNZiL9YWjPIkXtTbfENODRNP08kkZowW2bcxcDGczYb+NRDc4onKmeiOFHQ24TB0P0fxHVyEHhvVUSGISC18tZNxEkCkSfHYPjjKeb9A7rU6dUc1dTal5/HgzIm2HHtZpLglqlpBG21Rn/IwbUh4lvi6i2H/YQjaeH3zaKKe0KnNaUzUT91hOXGEq46QupRlZR7NRxga6qJj9QLqSaCZdcV3vT5+DQYmIRvydk2gCcxQjGbNCZ9/OTxk83IeUGfabKnrmTlmrBOMWBA3O7naBSqdhpEFhDEpmyCZV1GPcCvt01TUj1CbIizXaIeoZSHzfwdmH2xl00i87k23BFxSOzuUhVx58O0NXFzaGzmDKdllGNYrk2131FIXVdk2X27F/Y9qdsIlGO3+7UGxFSjXy1qxYLwQeULKSeS7RhLOKBuH96wz/9DLPVQUy14QwNLauA+atgNOG9hzKq9QJUt8VU25UyXRqI2ATJ2BOZSzRxtSmmGvkw5lVU75OL0vQh9oNSw1jQ2fNX80GGrdABiQPGXtDJMPwjSKULkqhJR5FUSxVIrNT5VIf2E2HOMjYTZR3PJfTJ4kMXpPoqBQLq0KnGqQSHNoyv8qunMqqdoeNlEMpFEV3NNYt3dio8mOp2uWyGOO9WyrsNGZtQWXc9NOY4khNRjVi5yiyeTWp6ULBlYcP4OqoHEgVScI1NlkTN19yTRihUZCo/BSqfJHEforq9dly/dUIpVtvOueoZm1CXRgHco43n8YIHcpWzBxUbUeZCwVZqGF9FdetZItWbb4XuIQ1hkEAwRWctZSTRuZRf3YByZVtkOpBgM1HWlScA48amJqb6hsyiFAPORd5lKOUF5lVUu2OxUIOCHxlJqcZmiaPnkcAlskKHMHuUziaTzASb0PG4gzwm5kpEtY5yMIyxOK0Fpgf7h4TtQb9LFiqRvIpq0HGEVGurYitPpVQjPunqXIwHpAHjITPR4m9UcrGa6fkEm9CdrsA7JBlvYbrpjk1hJHgJy+Geq1YqRPklD5xJeRXVmjixZwB5nSuFlGqYecvFWgiIEDt2q1mqPVz/q6XCR7DpECUSaHKFVMPsKmMXkwRM26xRBQstK/3w8AuO4lVUO89Cuwhc4Xapecjz1Q91gVijeBc2sDmQM/Jr7BI+QrJJlNThNUKqb9gURow9Cm3YNBSxrIQB6t9rqJ52dktH9IXX/bZYFlVO9RnXBynDdIuOwzUWnHTTEyoqpJUqkk1ypZNDN+YLXqgcW869onhFAxvaeOg1DPPr2lCOBq6TuJ5qb75wtcEfgVh7Q4eo9cpuIy/j3uGCea79jMaKPG5exRxbJ2yMSDbPWL9EUg/oxjzVaE7tCqFCdNQpWta11CiGZ59c6OmjlxNO2NVU94N4SZkr+JpO+3NMar2Xd6u4QHW6DMTKFumBPV4ng3QoL4mKL8Tlag6b2VyJqcZzbWcOn4tX46Gnu+cEyY9KFlflRgEnDBrGK6nWB0uYejpw0yDAhVsnbMaDS+mDC1Tj2nhEZHXt6wB4N/sQr6YpIweDWxrAyxpCKl8dI109Ft4yjRTVLlIJJfPx7ACg3zzh1U5YN61rYYRfcV+QamdLCWgQica5jupW54BkTB/3eVwvkKcHDsGFdcSXqAYvqWJtm1a3a5kpT1Vch+JSjXIRPHWcKeuyo9GN9OqmdCGbHSaPx5ci3YOd/+ThyFjXGPlCAUISL11DtbEaZsTEW3UyQk3svTcL5GtuLlGtGS/ECkYSYZoa4Re8bhBHsKqeoxora1zfkVGtpeoqBzutYWVU45ILm7NB5dxEs1xB9aaX0wqzYJPnGoDDM+EH6wPpHwW8SLVmPPB8VdvKjJKgjLvHr218PEc1jp5xVCGlWjtZbFhSN1OfJKMal5Y5cfwjirj8K6hmbd1sOAWEyxe5Jsd8xNEPJH8l5jLVUefCKjVSu1onxiOgGmD7Faf2c1Rjzxo7xnKqtZtSSD3efMmcq4xqZEJDzmuM3qN4botSPX2mPTh99W009zXINtD0yZhxqCO/UBg6er8qMbpSla6vQzOLeO2K2T6RswmqcZGrYtHW6Kab3LsSq5pGGP8PR497M2moIReObHRqsENk2A1O7VRHxxUHm3zSOrlXZKJ9eKXJ+oDRq2m24RM9rVlO/vdTNmCNtwG4uxx4+i7YTn1P153ZarzdRBqGDqQnwk3K9KdGjEtfl4BW40fNKptm2ar92FNlTtCAYKbrhBqeHK2J/5PARw3oPLLR43YInJ/a3fiTG6tW2uefc8YPv21IhtJM+9hCp8kHzO5TEXEPdB14/cE4iDC6jz+u0wcjOnh5ix1ugOP6vut82o6JevR43/moP+M0p4TT7fQjpiMYwPAcJ97ZMP4FVj3K32H3rFCQwqC+PjSWU8g0DXCgliY4HbV951Wgd8o6DPhMR9hSK27UHnvXgVqx5AeeiGnD6biySxUugBLN404o1DrY5bUzb+s4BSGcTs78et+FQh3By9cGaDWvIAXlRkznYqGOvZD8DmS086IgA+UcD6aGhGqD2hKE3TpOQQgwzlczexsZ1Tq126QzVO5eYfi93M+ISinTgNpthfu3oRW4oLZ/9MSuHlLW+ZUgwn0qFBhQUnqR6vt87lRttFcYHrUtuz68RHU+atED5e4VBC2VYOlLzSKtQNROWYXB7Nu07cuppj1ptf9bQYAenfLeHWQhjG7QLofbU+5eIfiMX+wHUqbdIZVFB2O1V2cheGz1bzSTaBCwY8LDldrB+rXoL2QaZKky1G+InqAIEwv1VGVN3xKbwBGoEMMLlFC/Ke6fdT7XxlH9EYc3xmDOVx8r9edx3xpgPufINbj/pv6Gw5sj5pqVaWbJjcJb4Lil5BocRkqm3wfHRY5rMFgopt8Lg2cv49oYLD5qWdvfiMMi41ox/b5YjWAsY+jHuWL6fXG/dI04RtwOlD/93tgNXWB4C5X9/wBMOr7XU9H4h6A/7Ek+L1J4S8zUQg8FBQUFBQUFBQUFBQUFBYX/GP4PnhNKtVhV45EAAAAASUVORK5CYII=" alt="" />
            </Link>
        </div>
        <div style={{ display:"flex", marginLeft:"530px", gap:"30px",marginTop:"1%"  }}>
            <div style={{display:"flex", gap:"40px"}}> 
                <Link to="/Doc" ><h4>Doc</h4></Link>
                <Link to="/blog" ><h4>Blog</h4></Link>
                <Link to="/Users" ><h4>Users</h4></Link>
                <Link to="/enterprise" ><h4>Enterprise</h4></Link>
                <Link to="/Feedback" ><h4>Feedback</h4></Link>
            </div>
            <div style={{ display:"flex", gap:"40%",marginTop:"-5px",fontSize:"1.5rem",marginRight:"30px"}}> 
            <Link to="/Github" ><p><FaGithub /></p></Link>
                <Link to="/Twitter" ><p><FaXTwitter /></p></Link>
                <Link to="/Discord" ><p><BsDiscord /></p></Link>
            </div>
        </div>
        </div>
    </div>
    )
}