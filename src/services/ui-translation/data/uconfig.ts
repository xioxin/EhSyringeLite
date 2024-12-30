import { merge } from '../helper';
import { BROWSING_COUNTRY } from './_browsingcountry';

merge(
    /^\/uconfig\.php/,
    undefined,
    {
        'Selected Profile:': '当前配置：',
        'Delete Profile': '删除配置',
        'Set as Default': '设为默认',

        'Image Load Settings': '图像加载设置',
        'Do you wish to load images through the Hentai@Home Network, if available?':
            '如果可用，是否希望通过 Hentai@Home 网络加载图像？',
        ' Any client (Recommended)': ' 任意客户端 (推荐)',
        ' Default port clients only (Can be slower. Enable if behind firewall/proxy that blocks outgoing non-standard ports.)':
            ' 仅使用默认端口的客户端 (可能稍慢，当防火墙或代理阻止非标准端口的流量时启用此项)',
        ' No [Modern/HTTPS] (Donator only. You will not be able to browse as many pages. Recommended only if having severe problems.)':
            ' 否 [现代/HTTPS] (仅限捐赠者，配额消耗会加快，只有出现严重的问题时才启用)',
        ' No [Legacy/HTTP] (Donator only. May not work by default in modern browsers. Recommended for legacy/outdated browsers only.)':
            ' 否 [传统/HTTP] (仅限捐赠者，可能无法在现代浏览器中使用，只推荐在过时的浏览器中启用)',
        'You appear to be browsing the site from ': '看起来您正在 ',
        ' or use a VPN or proxy in this country, which means the site will try to load images from H@H clients in this general geographic region. If this is incorrect, or if you want to use a different region for any reason (like if you are using a split tunneling VPN), you can select a different country below.':
            ' 浏览此网页，或者使用了此处的 VPN/代理，这意味着网站会尝试通过此区域的 H@H 客户端加载图像。如果此结果不正确，或者您希望通过其他地区的 H@H 客户端加载图像 (例如您正在使用分割隧道 VPN)，可以在下方选择一个不同的区域。',
        '\n\t\tBrowsing Country: ': '浏览区域：',
        'Auto-Detect': '自动检测',
        ...BROWSING_COUNTRY,

        'Image Size Settings': '图像大小设置',
        'Images are normally resampled to 1280 pixels (desktop) or 800 pixels (mobile) horizontal resolution for online viewing. You can select one of the following alternative resolutions. Note that legacy images will have horizontal resolutions of 780x / 1280x / 1600x / 2400x instead. (Resolutions above 1280x are restricted to accounts with any hath perk, a bronze star, or an UID below 3,000,000.)':
            '通常情况下，图像会被重采样到 1280 像素 (桌面端) 或 800 像素 (移动端) 宽度用于在线浏览，您也可以手动指定重采样分辨率。注意，旧图库的水平分辨率为 780x / 1280x / 1600x / 2400x。 (高于 1280 像素只提供给解锁过任意 Hath Perk、铜星或 UID 小于 3,000,000 的用户)',
        'Images are normally resampled to 1280 pixels (desktop) or 800 pixels (mobile) horizontal resolution for online viewing. You can select one of the following alternative resolutions. Note that legacy images will have horizontal resolutions of 780x / 1280x / 1600x / 2400x instead.':
            '通常情况下，图像会被重采样到 1280 像素 (桌面端) 或 800 像素 (移动端) 宽度用于在线浏览，您也可以手动指定重采样分辨率。注意，旧图库的水平分辨率为 780x / 1280x / 1600x / 2400x。',
        ' Auto': ' 自动',
        'Use original images instead of the resampled versions? Resampled images will still be used if you select a horizontal resolution different than "Auto" above and the image in question is wider, or if the original image is larger than 10 MiB (or 4 MiB for galleries older than one year).':
            '在阅读时优先加载原图而非重采样版本？当选择了“自动”以外的分辨率且原图宽度大于设定值，或原图大于 10 MiB (一年前发布的图库 4 MiB) 时，仍会加载重采样版本。',
        ' Prefer resampled images': ' 优先加载重采样版本',
        ' Prefer original images (requires the Source Nexus perk or a silver star)':
            ' 优先加载原图 (需要 Hath Perk:「原始之力」或银星)',
        ' Prefer original images': ' 优先加载原图',
        'While the site will automatically scale down images to fit your screen width, you can also manually restrict the maximum display size of an image. Like the automatic scaling, this does not resample the image, as the resizing is done browser-side. (0 = no limit)':
            '虽然图像会自动根据窗口缩小，您也可以手动指定最大显示大小。图像仅在浏览器端缩放，并没有被重新采样。(0 为不限制)',
        'Horizontal:': '宽/横向',
        'Vertical:': '高/纵向',
        ' pixels': ' px',

        'Gallery Name Display': '图库显示名称',
        'Many galleries have both an English/Romanized title and a title in Japanese script. Which gallery name would you like as default?':
            '许多图库都同时拥有英文/罗马音标题和日文标题，您希望默认显示哪一个？',
        ' Default Title': ' 默认标题 (英文/罗马音)',
        ' Japanese Title (if available)': ' 日文标题 (如果有)',

        'Archiver Settings': '归档设置',
        'The default behavior for the Archiver is to confirm the cost and selection for original or resampled archive, then present a link that can be clicked or copied elsewhere. You can change this behavior here.':
            '默认归档下载方式为手动选择原始或重采样画质，然后手动点击或复制下载链接。您可以在这里修改归档下载方式。',
        ' Manual Select, Manual Start (Default)': ' 手动选择，手动下载 (默认)',
        ' Manual Select, Auto Start': ' 手动选择，自动下载',
        ' Auto Select Original, Manual Start': ' 自动选择原始画质，手动下载',
        ' Auto Select Original, Auto Start': ' 自动选择原始画质，自动下载',
        ' Auto Select Resample, Manual Start': ' 自动选择重采样画质，手动下载',
        ' Auto Select Resample, Auto Start': ' 自动选择重采样画质，自动下载',

        'Front Page / Search Settings': '首页 / 搜索设置',
        'What categories would you like to show by default on the front page and in searches?':
            '您希望首页和搜索页面默认显示哪些类别？',

        'Which display mode would you like to use on the front and search pages?':
            '您希望首页和搜索页面使用哪种显示模式？',
        ' Minimal': ' 最小化',
        ' Minimal+': ' 最小化 + 关注标签',
        ' Compact': ' 紧凑 + 标签',
        ' Extended': ' 扩展',
        ' Thumbnail': ' 缩略图',

        'Which display style would you like for the search range indicator?': '您希望搜索范围指示器采用哪种显示样式？',
        ' Normal': ' 普通',
        ' Disabled': ' 禁用',

        'Optional UI Elements': '可选 UI 元素',
        'Some historic UI elements are now disabled by default. You can enable those here.':
            '一些历史 UI 元素现在默认禁用，您可以在这里重新启用它们。',
        ' Enable thumbnail selector on gallery screen': ' 在图库详情页启用缩略图选择器',

        'Here you can choose and rename your favorite categories.': '您可以在这里重命名您的收藏夹。',
        'Default sort order for galleries on your favorites page:': '收藏页面的默认排序方式？',
        ' By last gallery update time': ' 以图库最近更新时间排序',
        ' By favorited time': ' 以收藏时间排序',

        'Search Result Count': '搜索结果数',
        'How many results would you like per page for the index/search page and torrent search pages? (Hath Perk: Paging Enlargement Required)':
            '索引和搜索页面每页显示多少条数据？ (需要 Hath Perk:「页面扩大」)',
        ' 25 results': ' 25 个',
        ' 50 results': ' 50 个',
        ' 100 results': ' 100 个',

        'Thumbnail Settings': '缩略图设置',
        'How would you like the mouse-over thumbnails on the front page to load when using Minimal or Compact display mode?':
            '在最小化和紧凑列表模式下，您希望鼠标悬停缩略图何时加载？',
        ' On mouse-over (pages load faster, but there may be a slight delay before a thumb appears)':
            ' 鼠标悬停时 (页面加载快，缩略图加载有延迟)',
        ' On page load (pages take longer to load, but there is no delay for loading a thumb after the page has loaded)':
            ' 页面加载时 (页面加载时间更长，但是显示的时候无需等待)',
        'You can set a default thumbnail configuration for all galleries you visit.': '图库详情页缩略图设置。',
        'Size: ': '大小：',
        ' Small': ' 小图',
        'Rows:': '行数：',

        'Cover Scaling': '封面缩放',
        '%': ' %',
        'The cover size in gallery list views can be scaled to between 75% and 150% when using the Thumbnail or Extended display modes.':
            '在缩略图和扩展列表模式下，图库封面大小可以缩放为 75% 到 150% 之间的自定义值。',

        Ratings: '评分',
        'By default, galleries that you have rated will appear with red stars for ratings of 2 stars and below, green for ratings between 2.5 and 4 stars, and blue for ratings of 4.5 or 5 stars. You can customize this by entering your desired color combination below.':
            '默认情况下，您评为 2 星及以下的图库会显示为红星，2.5 ~ 4 星显示为绿星，4.5 ~ 5 星显示为蓝星。您可以将其设定为其他颜色组合。',
        'Each letter represents one star. The default RRGGB means R(ed) for the first and second star, G(reen) for the third and fourth, and B(lue) for the fifth. You can also use (Y)ellow for the normal stars. Any five-letter R/G/B/Y combo works.':
            '每个字母代表一颗星, 默认的 RRGGB 表示第一第二颗星显示为红色 R(ed)，第三第四颗星显示为绿色 G(reen)，第五颗星显示为蓝色 B(lue)。您也可以使用黄色 (Y)ellow。R/G/B/Y 中任何的五个字母组合都是有效的。',

        'Tag Watching Threshold': '标签订阅阈值',
        'Recently uploaded galleries will be included on the watched screen if it has at least one watched tag with positive weight, and the sum of weights on its watched tags add up to this value or higher. This threshold can be set between 0 and 9999.':
            '您可以将标签加入「我的标签」并设置一个正权重来关注它们。如果一个最近上传的图库所有已关注标签的权重之和大于等于设定值，则它会出现在「订阅」里。此值可以设定为 0 ~ 9999。',

        'Tag Filtering Threshold': '标签过滤阈值',
        'You can soft filter tags by adding them to ': '您可以将标签加入「',
        ' with a negative weight. If a gallery has tags that add up to weight below this value, it is filtered from view. This threshold can be set between 0 and -9999.':
            '」并设置一个负权重来软过滤它们。如果一个图库所有标签的权重之和小于设定值，则它会被过滤。此值可以设定为 0 ~ -9999。',

        'Show Filtered Removal Count': '显示过滤数量',
        'Show the "Your custom filters removed XX galleries from this page" readout?':
            '显示“您的过滤器已从此页面移除 XX 个结果”的消息？',
        ' Yes': ' 是',
        ' No': ' 否',

        'Excluded Languages': '排除语言',
        'If you wish to hide galleries in certain languages from the gallery list and searches, select them from the list below.':
            '如果您希望在图库列表和搜索结果中隐藏某些语言的图库，请从下面的列表中选择它们。',
        'Note that matching galleries will never appear regardless of your search query.':
            '请注意，无论搜索查询如何，匹配的图库都不会出现。',
        Original: '原始',
        Translated: '翻译',
        Rewrite: '改写',
        All: '所有',
        Japanese: '日语',
        English: '英语',
        Chinese: '汉语',
        Dutch: '荷兰语',
        French: '法语',
        German: '德语',
        Hungarian: '匈牙利语',
        Italian: '意大利语',
        Korean: '韩语',
        Polish: '波兰语',
        Portuguese: '葡萄牙语',
        Russian: '俄语',
        Spanish: '西班牙语',
        Thai: '泰语',
        Vietnamese: '越南语',
        'N/A': '无语言',
        Other: '其他',

        'Excluded Uploaders': '排除上传者',
        'If you wish to hide galleries from certain uploaders from the gallery list and searches, add them below. Put one username per line.':
            '如果您希望在图库列表和搜索结果中隐藏某些上传者上传的图库，请把他们的用户名填写在下方，每行一个。',
        'Note that galleries from these uploaders will never appear regardless of your search query.':
            '请注意，无论搜索查询如何，这些上传者上传的图库都不会出现。',
        'You are currently using ': '已使用 ',
        ' of ': '/',
        ' exclusion slots.\n': '。',

        'Viewport Override': '移动端虚拟宽度',
        px: ' px',
        'Allows you to override the virtual width of the site for mobile devices. This is normally determined automatically by your device based on its DPI. Sensible values at 100% thumbnail scale are between 640 and 1400.':
            '允许您覆盖移动设备的虚拟宽度，默认是根据 DPI 自动计算的，100% 缩略图比例下的合理值在 640 到 1400 之间。',

        'Gallery Comments': '图库评论',
        'Sort order for gallery comments:': '评论排序方式：',
        ' Oldest comments first': ' 最早的评论',
        ' Recent comments first': ' 最近的评论',
        ' By highest score': ' 分数最高',
        'Show gallery comment votes:': '显示评论投票数：',
        ' On score hover or click': ' 悬停或点击时',
        ' Always': ' 总是',

        'Gallery Tags': '图库标签',
        'Sort order for gallery tags:': '图库标签排序方式：',
        ' Alphabetical': ' 按字母排序',
        ' By tag power': ' 按标签权重',

        'Gallery Page Thumbnail Labeling': '图库缩略图标签',
        'Show label below gallery thumbnails:\n\t': '在图库详情页缩略图下方显示标签：',
        ' None': ' 无',
        ' Page Number Only': ' 仅页码',
        ' Page Number + Name': ' 页码 + 名称',

        'Multi-Page Viewer': '多页查看器',
        'Always use the Multi-Page Viewer? There will still be a link to manually start it if this is left disabled.':
            '总是使用多页查看器？禁用此选项时，仍可以手动启动多页查看器。',
        ' Nope': ' 否',
        ' Yup': ' 是',
        'Multi-Page Viewer Display Style:': '显示样式：',
        ' Align left; Only scale if image is larger than browser width': ' 左对齐；仅当图像大于浏览器宽度时缩放',
        ' Align center; Only scale if image is larger than browser width': ' 居中对齐；仅当图像大于浏览器宽度时缩放',
        ' Align center; Always scale images to fit browser width': ' 居中对齐；始终缩放图像以适应浏览器宽度',
        'Multi-Page Viewer Thumbnail Pane:': '显示缩略图侧栏：',
        ' Show': ' 显示',
        ' Hide': ' 隐藏',

        Apply: '应用',
        'Settings were updated': '设置更新完毕',
    },
    [[/ \(Default\)$/, ' (默认)']],
);
