# Giả lập di chuyển xe

Đồ án môn Đồ họa máy tính CS105.O22.KHCL của nhóm 15.

## Yêu cầu

NodeJS.

## Hướng dẫn sử dụng

### Cài đặt

```{bash}
git clone https://github.com/hnthap/car-ride.git --depth=1
cd car-ride
npm install
```

### Chạy

```{bash}
npm run build
npm run preview
```

### Dev mode

```{bash}
npm run dev
```

## Ghi công

### Hình ảnh

| Hình ảnh | Mô tả | Nguồn | Giấy phép |
| --- | --- | --- | --- |
| <img src="public/controls.png" width="200px" /> | Các phím di chuyển | [*Ecctrl + Fisheye*](https://codesandbox.io/s/nvk9pf) | Không áp dụng |
| <img src="public/Eiffel_Tower_20051010.jpg" width="300px" /> | Tháp Eiffel | [Tognopop (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Eiffel_Tower_20051010.jpg) | [Phạm vi công cộng](https://en.wikipedia.org/wiki/Public_domain) |
| <img src="public/Crowds_of_French_patriots_line_the_Champs_Elysees-edit2.jpg" width="300px" /> | Khải hoàn môn | [Jack Downey (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Crowds_of_French_patriots_line_the_Champs_Elysees-edit2.jpg) | [Phạm vi công cộng](https://en.wikipedia.org/wiki/Public_domain) |
| <img src="public/Flèche_et_rosace_transept_sud_Notre-Dame_de_Paris.jpg" width="200px" /> | Nhà thờ Đức Bà Paris | [Jebulon (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Fl%C3%A8che_et_rosace_transept_sud_Notre-Dame_de_Paris.jpg) | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.en)


### Mô hình 3D

| Mô hình | Mô tả | Tác giả | Giấy phép |
| --- | --- | --- | --- |
| [Car Scene](https://skfb.ly/6uSoM) | Xe | toivo | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| [sport car racing paris](https://skfb.ly/oIME6) | Địa hình, đường xá và Khải hoàn môn | amogusstrikesback2 | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| [Birch Tree](https://sketchfab.com/3d-models/birch-tree-aa842dffd9654d33b8b91170ce83c172) | Cây bạch dương | evolveduk | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| [Preceptory and Dower House - game asset](https://sketchfab.com/3d-models/preceptory-and-dower-house-game-asset-50d31c70e44b4000b17d81ff0fbcdf98) | Nhà thường | Andy Woodhead | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| [Modern Home](https://sketchfab.com/3d-models/modern-home-7054d2d8710b4213ad3857c1e37e57ec) | Nhà thường | Ciolan-T. Sebastian | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| [Notre-Dame de Paris](https://sketchfab.com/3d-models/notre-dame-de-paris-cbe2bbde869c4139912ce2cc35567d2c) | Nhà thờ Đức Bà Paris | copybrian | [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) |

## Việc cần làm

### Dễ

- [x] Thêm nguồn ảnh
- [x] Thêm nguồn mô hình vào các file JSX
- [ ] Bỏ các bức tường thấp và bãi cỏ xanh quanh Khải hoàn môn
- [ ] Thêm nhà và cây cho đỡ trống trải
- [x] Dọn dẹp file không dùng đến
  
### Trung bình

- [x] Sửa vị trí khởi đầu của xe
- [x] Cải thiện GUI controller
- [x] Control auto rotate.
- [ ] Nếu xe rơi tự do khỏi map, spawn xe về vị trí trước khi rơi
- [ ] Better control car movement.

### Khó

- [ ] Night mode.