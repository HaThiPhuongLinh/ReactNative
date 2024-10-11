import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Fontisto from "@expo/vector-icons/Fontisto";

const YourApp = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 141800;

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const totalPrice = quantity * pricePerItem;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#C4C4C4",
      }}
    >
      <View
        style={{
          flex: 2,
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flex: 3,
            flexDirection: "row",
          }}
        >
          <svg
            width="110"
            height="145"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 446 511.568"
          >
            <path
              fill="#353944"
              fill-rule="nonzero"
              d="M421.279 511.379H81.772v-.048c-70.173 2.132-80.095-9.65-81.557-56.651-.178-5.759-.169-12.408-.16-19.844l.004-5.226H0V51.831C0 27.879 6.345 14.565 22.262 6.665 34.732.475 51.946-.247 77.264.075l1.13-.041H406.3c8.504 0 16.226 3.463 21.811 9.048 5.586 5.586 9.049 13.303 9.049 21.812 0 57.623-.22 145.14-.435 232.653-.155 63.57-.315 127.151-.315 232.702 0 8.355-6.776 15.13-15.131 15.13z"
            />
            <path
              fill="#70B1E1"
              d="M81.771 496.25h339.508c0-163.19.75-302.199.75-465.356 0-8.663-7.066-15.729-15.729-15.729H78.394c-47.525-.669-63.264 1.872-63.264 36.667v377.777c0 55.75-2.297 68.782 66.641 66.641z"
            />
            <path
              fill="#353944"
              fill-rule="nonzero"
              d="M16.553 10.146C26.663 2.786 40.409.489 59.981.085A15.24 15.24 0 0161.587 0c8.355 0 15.13 6.775 15.13 15.13v481.242h-.055l-.004.414c-.227 8.324-7.162 14.884-15.485 14.657C-.046 509.739-.021 491.446.055 434.836.167 307.275 0 179.475 0 51.834 0 31.436 4.808 18.7 16.553 10.146z"
            />
            <path
              fill="#656D7A"
              d="M61.477 15.13c-34.506.556-46.347 6.388-46.347 36.704V429.61c0 49.642-1.932 65.418 46.347 66.762V15.13z"
            />
            <path
              fill="#D64331"
              fill-rule="nonzero"
              d="M372.089 15.159v123.599a2.439 2.439 0 01-.442 1.381 2.4 2.4 0 01-3.342.58l-27.131-19.093-28.495 19.009a2.402 2.402 0 01-3.903-1.877V15.159h63.313z"
            />
            <path
              fill="#353944"
              fill-rule="nonzero"
              d="M420.097 286.795H297.751c-8.355 0-15.13-6.775-15.13-15.13v-67.776c0-8.356 6.775-15.131 15.13-15.131h122.346c7.102 0 13.559 2.915 18.248 7.596l.059.06c4.682 4.689 7.596 11.146 7.596 18.248v46.23c0 7.093-2.914 13.559-7.596 18.248l-.059.059c-4.689 4.682-11.146 7.596-18.248 7.596z"
            />
            <path
              fill="#fff"
              d="M297.751 271.665h122.346c5.926 0 10.773-4.847 10.773-10.773v-46.23c0-5.927-4.847-10.773-10.773-10.773H297.751v67.776z"
            />
            <path fill="#353944" d="M324.514 201.592h14.25v72.37h-14.25z" />
            <circle fill="#353944" cx="399.119" cy="237.777" r="9.488" />
            <path
              fill="#FDFEFF"
              d="M139.87 466.54h218.518c8.394 0 15.263-6.901 15.263-15.263V366.83c0-8.361-6.899-15.262-15.263-15.262H139.87c-8.364 0-15.262 6.866-15.262 15.262v84.447c0 8.396 6.87 15.263 15.262 15.263z"
            />
            <path
              fill="#E8E7E8"
              fill-rule="nonzero"
              d="M153.88 387.768a5.302 5.302 0 010-10.603h130.386a5.302 5.302 0 010 10.603H153.88zm-.002 26.59a5.302 5.302 0 010-10.604h196.558a5.302 5.302 0 010 10.604H153.878zm0 26.585a5.302 5.302 0 010-10.604h196.558a5.302 5.302 0 010 10.604H153.878z"
            />
          </svg>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#EE0D0D",
                marginBottom: 10,
              }}
            >
              {pricePerItem.toLocaleString()} đ
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "bold",
                color: "#808080",
                textDecorationLine: "line-through",
              }}
            >
              {pricePerItem.toLocaleString()} đ
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={decreaseQuantity}>
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="14.2222" height="16" fill="#C4C4C4" />
                    <rect
                      x="3"
                      y="9.18164"
                      width="2.18182"
                      height="8"
                      transform="rotate(-90 3 9.18164)"
                      fill="#808080"
                    />
                  </svg>
                </TouchableOpacity>
                <Text
                  style={{
                    paddingRight: 10,
                    paddingLeft: 10,
                    fontWeight: "bold",
                  }}
                >
                  {quantity}
                </Text>
                <TouchableOpacity onPress={increaseQuantity}>
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="14.2222" height="16" fill="#C4C4C4" />
                    <rect
                      x="3"
                      y="9.09082"
                      width="2.18182"
                      height="8"
                      transform="rotate(-90 3 9.09082)"
                      fill="#011627"
                    />
                    <rect
                      x="5.90918"
                      y="4"
                      width="2.18182"
                      height="8"
                      fill="#011627"
                    />
                  </svg>
                </TouchableOpacity>
              </View>

              <Text
                style={{
                  paddingRight: 10,
                  paddingLeft: 10,
                  fontWeight: "bold",
                  color: "#134FEC",
                }}
              >
                Mua sau
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Mã giảm giá đã lưu
          </Text>
          <Text
            style={{
              paddingLeft: 10,
              fontWeight: "bold",
              color: "#134FEC",
              marginLeft: 10,
            }}
          >
            Xem tại đây
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 12,
              borderRadius: 3,
              flexDirection: "row",
              borderColor: "#808080",
              alignItems: "center",
              marginRight: 20,
              borderWidth: 1,
              width: 230,
            }}
          >
            <svg
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="16" fill="#F2DD1B" />
            </svg>

            <Text
              style={{
                paddingLeft: 10,
                fontWeight: "bold",
                color: "#011627",
                marginLeft: 10,
                fontSize: 18,
              }}
            >
              Mã giảm giá
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#0A5EB7",
              padding: 12,
              borderRadius: 3,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#FFFFFF",
              }}
            >
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
          }}
        >
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#134FEC",
            fontSize: 13,
            marginLeft: 10,
          }}
        >
          Nhập tại đây?
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 10,
          paddingVertical: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Tạm tính
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#EE0D0D",
          }}
        >
          {totalPrice.toLocaleString()} đ
        </Text>
      </View>
      <View
        style={{
          marginTop: 60,
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Thành tiền
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#EE0D0D",
            }}
          >
            {totalPrice.toLocaleString()} đ
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#E53935",
            padding: 12,
            borderRadius: 3,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YourApp;
