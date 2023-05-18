import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';
import logoIcon from '@/style/images/logo-icon.png';
import logoText from '@/style/images/logo-text.png';

import {
  DesktopOutlined,
  MediumWorkmarkOutlined,
  SettingOutlined,
  ContactsOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  ControlOutlined,
  CreditCardOutlined,
  BankOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Navigation() {
  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <>
      <Sider collapsible collapsed={isNavMenuClose} onCollapse={onCollapse} className="navigation">
        <div className="logo">
          <img
            src={logoIcon}
            alt="Logo"
            // style={{ margin: "0 auto 40px", display: "block" }}
          />

          {!showLogoApp && (
            <img src={logoText} alt="Logo" style={{ marginTop: '3px', marginLeft: '10px' }} />
          )}
        </div>
        <Menu mode="inline">
          <Menu.Item key={'Dashboard'} icon={<DashboardOutlined />}>
            <Link to={'/'} />
            Dashboard
          </Menu.Item>
          <SubMenu key={'Construction'} icon={<ContactsOutlined />} title={'Construction'}>
            <Menu.Item key={'ProjectExecution'}>
              <Link to={'/execution'} />
              Project Execution
            </Menu.Item>
            <Menu.Item key={'Estimation'}>
              <Link to={'/estimation'} />
              Estimation
            </Menu.Item>
            <Menu.Item key={'Payments'}>
              <Link to={'/payment/mode'} />
              Payments
            </Menu.Item>
            <Menu.Item key={'ResourceManagement'}>
              <Link to={'/resources'} />
              Resources Management
            </Menu.Item>
          </SubMenu>
          <SubMenu key={'Purchase'} icon={<CreditCardOutlined />} title={'Purchase'}>
            <Menu.Item key={'PaymentMode'}>
              <Link to={'/payment/mode'} />
              Payments
            </Menu.Item>
            <Menu.Item key={'Rental'}>
              <Link to={'/rental'} />
              Rental
            </Menu.Item>
            <Menu.Item key={'Transportation'}>
              <Link to={'/transportation'} />
              Transportation
            </Menu.Item>
            <Menu.Item key={'OtherExpense'}>
              <Link to={'/expenses'} />
              Other Expense
            </Menu.Item>
          </SubMenu>
          <Menu.Item key={'Quote'} icon={<FileSyncOutlined />}>
            <Link to={'/quote'} />
            Contract
          </Menu.Item>
          <Menu.Item key={'PaymentInvoice'} icon={<FileTextOutlined />}>
            <Link to={'/payment/invoice'} />
            Reports
          </Menu.Item>
          <SubMenu key={'Accounts'} icon={<BankOutlined />} title={'Accounts'}>
            <Menu.Item key={'JournalEntry'}>
              <Link to={'/entry'} />
              Journal Entry
            </Menu.Item>
            <Menu.Item key={'Transaction'}>
              <Link to={'/transaction'} />
              Transactions
            </Menu.Item>
            <Menu.Item key={'Statements'}>
              <Link to={'/statement'} />
              Statements
            </Menu.Item>
            <Menu.Item key={'ChartAccount'}>
              <Link to={'/chartacc'} />
              Chart of Account
            </Menu.Item>
          </SubMenu>
          <SubMenu key={'Master'} icon={<ControlOutlined />} title={'Masters'}>
            <Menu.Item key={'CashAccount'}>
              <Link to={'/payment/mode'} />
              Cash Account
            </Menu.Item>
            <Menu.Item key={'BankAccount'}>
              <Link to={'/payment/mode'} />
              Bank Account
            </Menu.Item>
            <Menu.Item key={'Supplier'}>
              <Link to={'/suppliers'} />
              Supplier
            </Menu.Item>
            <Menu.Item key={'Venders'}>
              <Link to={'/payment/mode'} />
              Venders
            </Menu.Item>
            <Menu.Item key={'OtherAccount'}>
              <Link to={'/otheracc'} />
              Other Account
            </Menu.Item>
            <Menu.Item key={'Branch'}>
              <Link to={'/branch'} />
              Branch
            </Menu.Item>
            <Menu.Item key={'Department'}>
              <Link to={'/department'} />
              Department
            </Menu.Item>
            <Menu.Item key={'Category'}>
              <Link to={'/workcategory'} />
              Work Category
            </Menu.Item>
            <Menu.Item key={'Unit'}>
              <Link to={'/unit'} />
              Unit
            </Menu.Item>
            <Menu.Item key={'Models'}>
              <Link to={'/models'} />
              Models
            </Menu.Item>
            <Menu.Item key={'PrintSettings'}>
              <Link to={'/print'} />
              Print Settings
            </Menu.Item>
            <Menu.Item key={'BOQ'}>
              <Link to={'/boq'} />
              BOQ,Template
            </Menu.Item>
          </SubMenu>
          <SubMenu key={'Admin'} icon={<TeamOutlined />} title={'H.R'}>
            <Menu.Item key={'Hr'}>
              <Link to={'/'} />
              H.R
            </Menu.Item>
            <Menu.Item key={'Employees'}>
              <Link to={'/employees'} />
              Employees
            </Menu.Item>
            <Menu.Item key={'PayRoll'}>
              <Link to={'/payroll'} />
              Pay Roll
            </Menu.Item>
            <Menu.Item key={'LeaveManage'}>
              <Link to={'/leave'} />
              Absences & Leave Manage
            </Menu.Item>
          </SubMenu>
          <Menu.Item key={'CRM'} icon={<CustomerServiceOutlined />}>
            <Link to={'/crm'} />
            C.R.M
          </Menu.Item>
          <SubMenu key={'Inventory'} icon={<MediumWorkmarkOutlined />} title={'Inventory'}>
            <Menu.Item key={'InventoryPage'}>
              <Link to={'/inventory'} />
              Inventory
            </Menu.Item>
            <Menu.Item key={'Materials'}>
              <Link to={'/materials'} />
              Materials
            </Menu.Item>
            <Menu.Item key={'Godown'}>
              <Link to={'/godown'} />
              Godowns
            </Menu.Item>
            <Menu.Item key={'Transfer'}>
              <Link to={'/transfer'} />
              Transfer
            </Menu.Item>
          </SubMenu>
          <SubMenu key={'Settings'} icon={<SettingOutlined />} title={'Settings'}>
            <Menu.Item key={'UserManagement'}>
              <Link to={'/users'} />
              User Management
            </Menu.Item>
            <Menu.Item key={'GeneralSettings'}>
              <Link to={'/generalsettings'} />
              General Settings
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
}
