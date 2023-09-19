function avoidRepetation(id, dpn, type_0, type_1, type_2, type_3, type_4, type_5, type_6, type_7, type_8, type_9, type_10) {
    document.getElementById("dataContainer").innerHTML += `
    <div class="infoLine">
            <div class="cell_1">
                ${id}
            </div>
            <div class="cell_2">
                ${dpn}
            </div>
            <div class="cell_3" style=" background-color: #c3deff33;">
                <div class="checkTable">
                    <div class="imgContainer">
                        ${type_0}
                        </div>
                 <div class="imgContainer">
                       ${type_1}
                        </div>
                    <div class="imgContainer">
                       ${type_2}
                        </div>
                </div>
            </div>
            <div class="cell_4">
                <div class="checkTable">
                    <div class="imgContainer">
                       ${type_3}</div>
                    <div class="imgContainer">
                        ${type_4}
                    </div>
                    <div class="imgContainer">
                       ${type_5}</div>
                </div>
            </div>
            <div class="cell_5" style=" background-color: #c3deff33;">
                <div class="checkTable">
                    <div class="imgContainer">
                        ${type_6}
                    </div>
                    <div class="imgContainer">
                       ${type_7}
                       </div>
                </div>
            </div>
            <div class="cell_6">
                <div class="checkTable">
                    <div class="imgContainer">
                       ${type_8}
                    </div>
                </div>
            </div>
            <div class="cell_7" style=" background-color: #c3deff33;">
                <div class="checkTable">
                    <div class="imgContainer">
                       ${type_9}
                       </div>
                    <div class="imgContainer">
                       ${type_10}
                       </div>
                </div>
            </div>
        </div>
`;
}
