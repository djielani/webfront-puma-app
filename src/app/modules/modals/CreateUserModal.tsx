import { KTSVG } from "../../../_metronic/helpers/components/KTSVG";
import { Vertical } from "../wizards/components/Vertical";

export default function CreateUserModal() {
    return (
        <>
            <div className="modal fade" tabIndex={-1} id="CreateUserModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <div
                                className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <KTSVG
                                    path="media/icons/duotune/arrows/arr061.svg"
                                    className="svg-icon svg-icon-2x"
                                />
                            </div>
                        </div>
                        <div className="modal-body">
                        <Vertical />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-light"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}