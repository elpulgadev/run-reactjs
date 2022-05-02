import { forwardRef } from 'react';

import video1 from './videos/video-1.mp4';

function Video (props, ref) {
	return <video ref={ref} src={video1} />;
}

export default forwardRef(Video);

// component nào mà gọi component này
// ==> sẽ gọi forwardRef HOC trước
// ==> sẽ nhận props ref bên kia
// ==> bên trong forwardRef xử lý gọi video này
// ==> truyền cái ref nhận được làm đối số thứ 2 của video

// trong component này chúng ta đang public cái ref này ra component cha (component cha có toàn quyền tương tác)
// ==> nguy hiểm
// theo OOP
// ==> mất đi tính toàn vẹn dữ liệu
// ==> rủi ro cho component video