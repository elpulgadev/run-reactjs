- https://tkdodo.eu/blog/avoiding-use-effect-with-callback-refs

    - So sánh với phiên bản đầu tiên
        - Nó ít mã hơn và chỉ sử dụng một hook thay vì hai.
        - Nó sẽ hoạt động trong mọi tình huống bởi vì callback ref bị ràng buộc với vòng đời của nút DOM, không phải với thành phần gắn kết nó.
        - Nó sẽ không thực thi hai lần ở chế độ nghiêm ngặt (khi chạy trong môi trường phát triển).