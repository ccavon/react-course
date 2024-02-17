/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-17 16:23:17
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-17 16:59:12
 * @FilePath: /react-course/04_Learn-Log/src/Components/UI/ConfirmModal/ConfirmModal.js
 * @Description: 确认对话框
 */
import Card from "../Card/Card";
import "./ConfirmModal.css";

const ConfirmModal = (props) => {
  return (
    <Card className="confirmModal">
      <div className="confirmText">
        <p>
          该操作不可恢复！确认吗？
        </p>
      </div>
      <div className="confirmButton">
        <button className="okButton">确认</button>
        <button className="noButton">取消</button>
      </div>
    </Card>
  );
};

export default ConfirmModal;