---
title: DrXCloudPhone Setup Guide
description: Hướng dẫn kết nối và điều khiển iPhone từ xa trên PC qua trình duyệt web
---

## Giới Thiệu

**DrXCloudPhone** là giải pháp cho phép bạn **điều khiển iPhone từ xa trên PC** thông qua trình duyệt, không cần cáp kết nối. Bạn có thể xem màn hình iPhone và thao tác trực tiếp như đang cầm điện thoại trên tay.

### DrXCloudPhone hoạt động như thế nào?

- **Tailscale**: Tạo mạng riêng ảo (VPN) kết nối an toàn giữa iPhone và PC của bạn
- **noVNC**: Công nghệ hiển thị màn hình iPhone ngay trên trình duyệt web (Chrome, Edge, Firefox)
- **DrXCloudPhone App**: Ứng dụng trên iPhone phát sóng màn hình qua mạng Tailscale

### Tải Ứng Dụng

- **iPhone**: [DrXCloudPhone trên App Store](https://apps.apple.com/app/drxcloudphone)
- **PC**: [DrXCloudPhone-Scripts.exe](https://github.com/drxcloudphone/scripts/releases/latest)

---

## Hướng Dẫn Cài Đặt

### Bước 1: Thiết Lập Trên iPhone

1. Mở **App Store** → Tìm và tải ứng dụng **Tailscale**
2. Mở ứng dụng **Tailscale** vừa cài
3. Nhấn **Sign in** → Chọn đăng nhập bằng **Google** hoặc **Email**
4. Sau khi đăng nhập, gạt công tắc **Connect** sang màu xanh (**ON**)

✅ **Hoàn tất**: iPhone đã kết nối vào mạng riêng Tailscale của bạn

---

### Bước 2: Thiết Lập Trên PC Windows

1. Tải file **DrXCloudPhone-Scripts.exe** về máy → Nhấp đúp để mở
2. Cửa sổ dòng lệnh (Command) hiện ra, chọn các tùy chọn theo thứ tự:

**Bước 2.1: Cài đặt Tailscale**
- Nhập số **1** → Enter (chọn **Option 1 – Auto Install Tailscale**)
- Chương trình sẽ tự động tải và cài Tailscale lên PC

**Bước 2.2: Đăng nhập Tailscale**
- Nhập số **2** → Enter (chọn **Option 2 – Sign in**)
- Trình duyệt sẽ mở ra → Đăng nhập bằng **cùng tài khoản** Google/Email như trên iPhone
- ⚠️ **Quan trọng**: Phải dùng cùng tài khoản với iPhone, nếu không sẽ không kết nối được

**Bước 2.3: Bật kết nối**
- Nhập số **4** → Enter (chọn **Option 4 – Enable Connection**)

**Bước 2.4: Kiểm tra địa chỉ IP**
- Nhập số **6** → Enter (chọn **Option 6 – Check device details**)
- Màn hình sẽ hiển thị danh sách thiết bị và **Tailscale IP** của từng thiết bị
- 📝 **Ghi lại IP của iPhone** (ví dụ: `100.64.0.1`) - bạn sẽ cần dùng ở bước sau

✅ **Hoàn tất**: PC đã sẵn sàng kết nối với iPhone

---

### Bước 3: Khởi Động DrXCloudPhone App (Trên iPhone)

1. Tải **DrXCloudPhone**
1. Mở app **DrXCloudPhone** → Cấu hình các thông số:

**Cài đặt cơ bản (Bắt buộc):**

- **Enable**: Gạt sang **ON** (màu xanh)
- **TCP Port**: Giữ nguyên `5901`
- **Full-access Password**: Đặt mật khẩu bảo mật (tối thiểu 8 ký tự)
  - Ví dụ: `12345678`
  - Ghi nhớ mật khẩu này - bạn sẽ cần nhập khi kết nối
- **HTTP Port**: Đặt là `5801` *(Rất quan trọng - phải là 5801)*

**Cài đặt tối ưu hiệu năng (Khuyến nghị):**

*(Dành cho PC cấu hình trung bình trở lên)*

- **Frame Rate**: Chọn `60` (càng cao càng mượt, nhưng tốn tài nguyên hơn)
  - PC yếu: chọn `30`
  - PC mạnh: có thể chọn `120`
- **DEFER WINDOW (SEC)**: Đặt `0.005`
- **Tile Size (PX)**: Đặt `16`
- **Non-blocking Swap**: Bật **ON**

**Lưu ý quan trọng:**
- Tắt **Chế độ Tiết kiệm Pin** (Low Power Mode) trên iPhone
- Đảm bảo iPhone đang sạc pin hoặc có pin >50%
- Đóng các app chạy nền không cần thiết trên cả iPhone và PC

✅ **Hoàn tất**: iPhone đã sẵn sàng phát sóng màn hình

---

### Bước 4: Kết Nối iPhone Trên PC (Qua Trình Duyệt)

1. Trên PC, mở trình duyệt web (**Chrome** / **Edge** / **Firefox**)

2. Nhập địa chỉ vào thanh địa chỉ (URL bar):

```
http://<ip-cua-iphone>:5801
```

**Ví dụ thực tế:**

Nếu IP iPhone là `100.64.0.1` (lấy từ Bước 2.4), bạn nhập:

```
http://100.64.0.1:5801
```

3. Trang noVNC sẽ hiển thị → Nhấn nút **Click here to connect using noVNC**

4. Nhập **mật khẩu** bạn đã đặt ở Bước 3 → Nhấn **Enter**

5. 🎉 **Thành công**: Màn hình iPhone hiển thị ngay trên trình duyệt

### Cách Điều Khiển iPhone

**Thao tác chuột:**

- **Click chuột trái**: Chạm vào màn hình (tap)
- **Cuộn chuột (scroll wheel)**: Cuộn trang lên/xuống
- **Click chuột phải**: Chức năng như nút Home
- **Nút cuộn giữa**: Tắt nguồn

**Thao tác bàn phím:**

- **Bàn phím**: Hỗ trợ đầy đủ, bao gồm các phím chức năng và phím tắt
- **Âm lượng**: Tăng/giảm giống như trên máy tính

---

## Sử Dụng Nâng Cao

### Điều Khiển Nhiều iPhone Cùng Lúc

Bạn có thể kết nối và điều khiển **nhiều iPhone** từ 1 PC, mỗi iPhone hiển thị trên 1 tab riêng.

**Cách thiết lập:**

1. **Trên mỗi iPhone:**
   - Cài Tailscale → Đăng nhập **cùng tài khoản** Google/Email
   - Cài DrXCloudPhone → Đặt **HTTP Port = 5801**
   - Mỗi iPhone sẽ có **IP riêng**, ví dụ:
     - iPhone 1 → `100.64.0.1`
     - iPhone 2 → `100.64.0.2`
     - iPhone 3 → `100.64.0.3`

2. **Trên PC:**
   - Mở nhiều tab trình duyệt
   - **Tab 1**: Truy cập `http://100.64.0.1:5801` → Điều khiển iPhone 1
   - **Tab 2**: Truy cập `http://100.64.0.2:5801` → Điều khiển iPhone 2
   - **Tab 3**: Truy cập `http://100.64.0.3:5801` → Điều khiển iPhone 3

✅ **Kết quả**: Bạn có thể làm việc song song trên nhiều iPhone, hoàn toàn độc lập

---

## Xử Lý Sự Cố Thường Gặp

### 1. Không kết nối được (Lỗi "Connection Failed")

**Nguyên nhân & Giải pháp:**

- ❌ **Tailscale chưa kết nối đủ cả 2 thiết bị**
  - ✅ Kiểm tra: Mở Tailscale trên iPhone → Đảm bảo toggle **ON** (xanh)
  - ✅ Trên PC: Chạy lại **Option 4 – Enable Connection**

- ❌ **Dùng sai tài khoản Tailscale**
  - ✅ iPhone và PC **phải đăng nhập cùng 1 tài khoản** Google/Email

- ❌ **HTTP Port sai**
  - ✅ Kiểm tra DrXCloudPhone app → **HTTP Port phải là 5801**

- ❌ **IP sai hoặc đã thay đổi**
  - ✅ Chạy lại **Option 6** trên PC để lấy IP mới

### 2. Kết nối được nhưng màn hình lag, giật

**Giải pháp:**

- Giảm **Frame Rate** xuống `30` trong DrXCloudPhone app
- Tăng **DEFER WINDOW** lên `0.01` hoặc `0.02`
- Tắt **Non-blocking Swap**
- Đảm bảo iPhone và PC đang dùng kết nối mạng tốt (ưu tiên WiFi 5GHz)
- Đóng các tab/app khác trên PC để giải phóng RAM

### 3. Bị ngắt kết nối liên tục

**Giải pháp:**

- Tắt **Chế độ Tiết kiệm Pin** (Low Power Mode) trên iPhone
- Cắm sạc iPhone để màn hình không tự tắt
- Kiểm tra kết nối internet ổn định ở cả 2 thiết bị

### 4. Nhập mật khẩu đúng nhưng vẫn báo sai

**Giải pháp:**

- Mở lại DrXCloudPhone app → Đặt lại mật khẩu mới
- Gạt **Enable** sang **OFF** rồi **ON** lại
- Khởi động lại app DrXCloudPhone

### 5. Không tìm thấy IP của iPhone

**Giải pháp:**

- Đảm bảo Tailscale trên iPhone đang **bật** (toggle màu xanh)
- Đợi 10-20 giây rồi chạy lại **Option 6** trên PC
- Thử khởi động lại Tailscale trên cả iPhone và PC

---

## Câu Hỏi Thường Gặp (FAQ)

**1. DrXCloudPhone có hoạt động khi iPhone và PC ở xa nhau không?**

✅ **Có**, miễn là cả 2 thiết bị có kết nối internet. Bạn có thể điều khiển iPhone từ bất kỳ đâu trên thế giới.

**2. Dữ liệu có bị lộ hoặc không an toàn không?**

✅ **An toàn**. Tailscale sử dụng mã hóa end-to-end, chỉ bạn mới truy cập được thiết bị của mình.

**3. Tôi có thể dùng cho iPad không?**

✅ **Có**, các bước tương tự với iPhone.

**4. Có mất phí không?**

✅ **Miễn phí** với tài khoản Tailscale Free (hỗ trợ tối đa 100 thiết bị).

**5. Tôi có thể điều khiển iPhone từ Mac/Linux không?**

✅ **Có**, chỉ cần có trình duyệt web. Các bước tương tự, chỉ khác phần cài Tailscale trên máy tính.

**6. Có cần Jailbreak iPhone không?**

❌ **Không cần**, hoạt động với iPhone thông thường.

---

## Tóm Tắt Nhanh (Quick Start)

1. **iPhone**: Cài **Tailscale** + **DrXCloudPhone** → Đăng nhập → Bật kết nối
2. **PC**: Chạy **DrXCloudPhone-Scripts.exe** → Cài Tailscale → Đăng nhập cùng tài khoản → Lấy IP iPhone
3. **Kết nối**: Mở trình duyệt → Truy cập `http://<ip-iphone>:5801` → Nhập mật khẩu → Xong!
