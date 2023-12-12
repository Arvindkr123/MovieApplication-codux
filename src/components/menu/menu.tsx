import classNames from 'classnames';
import styles from './menu.module.scss';

export interface MenuProps {
    className?: string;
}

export const Menu = ({ className }: MenuProps) => {
    return <div className={classNames(styles.root, className)}>Menu</div>;
};
