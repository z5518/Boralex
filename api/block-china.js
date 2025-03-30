export const config = {
    runtime: 'edge',
};

export default function handler(req) {
    const country = req.geo?.country;
    console.log('Detected country:', country); // 添加日志输出
    // 如果国家代码是 'CN'（中国），则返回 403 禁止访问
    if (country === 'CN') {
        return new Response('Access is blocked in your region.', {
            status: 403,
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    }
    // 非中国地区则正常响应
    return new Response(null, {
        status: 302,
        headers: {
            Location: req.url,
        },
    });
}