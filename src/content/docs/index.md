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

- **iPhone**: [DrXCloudPhone](https://transfer.it/t/yup24N1FUTQI)
- **PC**: [Tailscale](https://pkgs.tailscale.com/stable/tailscale-setup-latest.exe)

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

1. Tải và cài đặt ứng dụng **Tailscale** từ link trên
2. Đăng nhập bằng **cùng tài khoản** Google/Email như trên iPhone
   - ⚠️ **Quan trọng**: Phải dùng cùng tài khoản với iPhone, nếu không sẽ không kết nối được
3. Khi đăng nhập thành công, nhấn [visit the console](https://login.tailscale.com/admin/machines)
4. Kiểm tra địa chỉ IP:
   - Xem danh sách thiết bị và **Tailscale IP** (cột Addresses) của từng thiết bị
   - 📝 **Ghi lại IP của iPhone** (ví dụ: `100.85.10.1`) - bạn sẽ cần dùng ở bước sau

✅ **Hoàn tất**: PC đã sẵn sàng kết nối với iPhone

---

### Bước 3: Cài Đặt DrXCloudPhone App Trên iPhone

#### 3.1. Phương Thức Cài Đặt

**Option A: TrollStore - `.tipa` (Khuyến Nghị)**

- iOS: 14.0+
- Yêu cầu: TrollStore đã cài ([Guide](https://ios.cfw.guide/installing-trollstore/))
- Jailbreak: Không cần

**Option B: Esign, AltStore, Sideloadly - `.ipa` (Backup)**

- File: Đổi `.tipa` → `.ipa`
- iOS: 14.0+
- Jailbreak: Không cần

#### 3.2. Cài Đặt Qua TrollStore (Khuyến Nghị)

```
1. Mở TrollStore app
2. Tap "+"
3. Chọn "Install IPA File"
4. Navigate → Tap DrXCloudPhone_2.7.tipa
5. Chờ 3-10 giây
6. Ấn vào app → Open
7. Done! Icon xuất hiện trên Home Screen
```

#### 3.3. Kích Hoạt App

1. Liên hệ admin, cung cấp **Serial Number** để admin cấp key kích hoạt
2. Cách lấy **Serial Number**: 
   - Settings (Cài đặt) → General (Cài đặt chung) → About (Giới thiệu) → Lấy giá trị tại mục Serial Number (Số sê-ri)
3. Sau khi nhận file key từ admin:
   - Mở file và sao chép toàn bộ nội dung key
   - Vào app DrXCloudPhone
   - Điền chính xác key vào mục **Enter your license key**
   - Ấn **Confirm**
   - Nếu thành công sẽ truy cập được vào app

✅ **Hoàn tất**: DrXCloudPhone đã cài đặt và kích hoạt thành công

---

### Bước 4: Cấu Hình DrXCloudPhone App

Mở app **DrXCloudPhone** → Cấu hình các thông số:

#### 4.1. Cài Đặt Cơ Bản (Bắt Buộc)

- **Enable**: Gạt sang **ON** (màu xanh)
- **TCP Port**: Giữ nguyên `5901`
- **Full-access Password**: Đặt mật khẩu bảo mật (tối thiểu 8 ký tự)
  - Ví dụ: `12345678`
  - Ghi nhớ mật khẩu này - bạn sẽ cần nhập khi kết nối
- **HTTP Port**: Đặt là `5801` *(Rất quan trọng - phải là 5801)*

#### 4.2. Cài Đặt Tối Ưu Hiệu Năng (Khuyến Nghị)

*(Dành cho PC cấu hình trung bình trở lên)*

- **Frame Rate**: Chọn `60` (càng cao càng mượt, nhưng tốn tài nguyên hơn)
  - PC yếu: chọn `30`
  - PC mạnh: có thể chọn `120`
- **DEFER WINDOW (SEC)**: Đặt `0.005`
- **Tile Size (PX)**: Đặt `16`
- **Non-blocking Swap**: Bật **ON**

#### 4.3. Lưu Ý Quan Trọng

- Tắt **Chế độ Tiết kiệm Pin** (Low Power Mode) trên iPhone
- Đảm bảo iPhone đang sạc pin hoặc có pin >50%
- Đóng các app chạy nền không cần thiết trên cả iPhone và PC

✅ **Hoàn tất**: iPhone đã sẵn sàng phát sóng màn hình

---

### Bước 5: Kết Nối iPhone Trên PC (Qua Trình Duyệt)

1. Trên PC, mở trình duyệt web (**Chrome** / **Edge** / **Firefox**)

2. Nhập địa chỉ vào thanh địa chỉ (URL bar):

```
http://<ip-cua-iphone>:5801
```

**Ví dụ thực tế:**

Nếu IP iPhone là `100.85.10.1` (lấy từ Bước 2), bạn nhập:

```
http://100.85.10.1:5801
```

3. Trang noVNC sẽ hiển thị → Nhấn nút **Click here to connect using noVNC**

4. Nhập **mật khẩu** bạn đã đặt ở Bước 4 → Nhấn **Send Credentials** hoặc **Enter**

5. 🎉 **Thành công**: Màn hình iPhone hiển thị ngay trên trình duyệt

---

## Cách Điều Khiển iPhone

### Thao Tác Chuột

- **Click chuột trái**: Chạm vào màn hình (tap)
- **Cuộn chuột (scroll wheel)**: Cuộn trang lên/xuống
- **Click chuột phải**: Mở menu ngữ cảnh hoặc chức năng đặc biệt
- **Kéo thả (drag)**: Giữ chuột trái và di chuyển

### Thao Tác Bàn Phím

- **Bàn phím**: Hỗ trợ đầy đủ, bao gồm các phím chức năng và phím tắt
- **Âm lượng**: Sử dụng phím tăng/giảm âm lượng trên bàn phím PC

---

## Sử Dụng Nâng Cao

### Điều Khiển Nhiều iPhone Cùng Lúc

Bạn có thể kết nối và điều khiển **nhiều iPhone** từ 1 PC, mỗi iPhone hiển thị trên 1 tab riêng.

**Cách thiết lập:**

**Trên mỗi iPhone:**

- Cài Tailscale → Đăng nhập **cùng tài khoản** Google/Email
- Cài DrXCloudPhone → Đặt **HTTP Port = 5801**
- Mỗi iPhone sẽ có **IP riêng**, ví dụ:
  - iPhone 1 → `100.85.10.1`
  - iPhone 2 → `100.85.10.2`
  - iPhone 3 → `100.85.10.3`

**Trên PC:**

- Mở nhiều tab trình duyệt
- **Tab 1**: Truy cập `http://100.85.10.1:5801` → Điều khiển iPhone 1
- **Tab 2**: Truy cập `http://100.85.10.2:5801` → Điều khiển iPhone 2
- **Tab 3**: Truy cập `http://100.85.10.3:5801` → Điều khiển iPhone 3

✅ **Kết quả**: Bạn có thể làm việc song song trên nhiều iPhone, hoàn toàn độc lập

---

## Xử Lý Sự Cố Thường Gặp

### 1. Không Kết Nối Được (Lỗi "Connection Failed")

**Nguyên nhân & Giải pháp:**

- ❌ **Tailscale chưa kết nối đủ cả 2 thiết bị**
  - ✅ Kiểm tra: Mở Tailscale trên iPhone → Đảm bảo toggle **ON** (xanh)
  - ✅ Trên PC: Mở Tailscale từ system tray (khay hệ thống), chuột phải vào biểu tượng Tailscale, đảm bảo hiển thị **Connected**

- ❌ **Dùng sai tài khoản Tailscale**
  - ✅ iPhone và PC **phải đăng nhập cùng 1 tài khoản** Google/Email

- ❌ **HTTP Port sai**
  - ✅ Kiểm tra DrXCloudPhone app → **HTTP Port phải là 5801**

- ❌ **Firewall chặn kết nối**
  - ✅ Tạm thời tắt Windows Firewall để kiểm tra
  - ✅ Thêm rule cho phép port 5801 trong firewall

### 2. Kết Nối Được Nhưng Màn Hình Lag, Giật

**Giải pháp:**

- Giảm **Frame Rate** xuống `30` trong DrXCloudPhone app
- Tăng **DEFER WINDOW** lên `0.01` hoặc `0.02`
- Tắt **Non-blocking Swap**
- Đảm bảo iPhone và PC đang dùng kết nối mạng tốt (ưu tiên WiFi 5GHz)
- Đóng các tab/app khác trên PC để giải phóng RAM
- Giảm **Tile Size** xuống `8` nếu vẫn lag

### 3. Bị Ngắt Kết Nối Liên Tục

**Giải pháp:**

- Tắt **Chế độ Tiết kiệm Pin** (Low Power Mode) trên iPhone
- Cắm sạc iPhone để màn hình không tự tắt
- Kiểm tra kết nối internet ổn định ở cả 2 thiết bị
- Vào **Settings** trên iPhone → **Display & Brightness** → **Auto-Lock** → Chọn **Never**

### 4. Nhập Mật Khẩu Đúng Nhưng Vẫn Báo Sai

**Giải pháp:**

- Mở lại DrXCloudPhone app → Đặt lại mật khẩu mới
- Gạt **Enable** sang **OFF** rồi **ON** lại
- Khởi động lại app DrXCloudPhone
- Đảm bảo mật khẩu không có ký tự đặc biệt gây xung đột

### 5. Không Tìm Thấy IP Của iPhone

**Giải pháp:**

- Đảm bảo Tailscale trên iPhone đang **bật** (toggle màu xanh)
- Đợi 10-20 giây rồi refresh trang Tailscale Admin Console
- Kiểm tra lại phần **Machines** trong Tailscale Admin Console
- Thử khởi động lại Tailscale trên cả iPhone và PC

---

## Câu Hỏi Thường Gặp (FAQ)

**1. DrXCloudPhone có hoạt động khi iPhone và PC ở xa nhau không?**

✅ **Có**, miễn là cả 2 thiết bị có kết nối internet. Bạn có thể điều khiển iPhone từ bất kỳ đâu trên thế giới.

**2. Dữ liệu có bị lộ hoặc không an toàn không?**

✅ **An toàn**. Tailscale sử dụng mã hóa end-to-end (WireGuard), chỉ bạn mới truy cập được thiết bị của mình.

**3. Tôi có thể dùng cho iPad không?**

✅ **Có**, các bước tương tự với iPhone.

**4. Có mất phí không?**

✅ **Miễn phí** với tài khoản Tailscale Free (hỗ trợ tối đa 100 thiết bị).

**5. Tôi có thể điều khiển iPhone từ Mac/Linux không?**

✅ **Có**, chỉ cần có trình duyệt web. Các bước tương tự, chỉ khác phần cài Tailscale trên máy tính.

**6. Có cần Jailbreak iPhone không?**

❌ **Không cần**, hoạt động với iPhone thông thường.

---

## Hỗ Trợ & Liên Hệ

Nếu gặp vấn đề không thể giải quyết, vui lòng:

- Kiểm tra lại từng bước trong hướng dẫn
- Xem phần **Xử Lý Sự Cố** phía trên
- Liên hệ nhà phát triển DrXCloudPhone để được hỗ trợ
