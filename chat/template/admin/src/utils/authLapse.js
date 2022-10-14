
export function authLapse (data) {
    return new Promise((resolve, reject) => {
        this.$Notice.warning({
            title: data.title,
            duration: 3,
            desc: data.info,
            render: h => {
                return h('div', [
                    h('a', {
                        attrs: {
                            href: 'http://download.yhlove1.com/'
                        }
                    }, data.info)
                ])
            }
        })
    // if(data.status === false){
    //
    // }
    })
}
