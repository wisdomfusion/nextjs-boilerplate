import {Button, Tooltip} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../styles/Home.module.less';

export default function Home() {
    return (
        <Tooltip title="search">
            <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
        </Tooltip>
    );
}
