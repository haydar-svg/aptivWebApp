function avoidRepetation(id, dpn, t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9, t_10) {
    document.getElementById("dataContainer").innerHTML += `
    <div class="infoLine ">
            <div class="cell_1 lazy-load-div" data-content="${id}">
            </div>
            <div class="cell_2 lazy-load-div" data-content="${dpn}">
            </div>
            <div class="cell_3 CB">
                <div class="checkTable">
                    <div >
                        ${t_0}
                    </div>
                    <div >
                       ${t_1}
                    </div>
                    <div >
                       ${t_2}
                    </div>
                </div>
            </div>
            <div class="cell_4">
                <div class="checkTable">
                    <div >
                       ${t_3}</div>
                    <div >
                        ${t_4}
                    </div>
                    <div >
                       ${t_5}</div>
                </div>
            </div>
            <div class="cell_5 CB">
                <div class="checkTable">
                    <div >
                        ${t_6}
                    </div>
                    <div >
                       ${t_7}
                       </div>
                </div>
            </div>
            <div class="cell_6">
                <div class="checkTable">
                    <div >
                       ${t_8}
                    </div>
                </div>
            </div>
            <div class="cell_7 CB">
                <div class="checkTable">
                    <div >
                       ${t_9}
                       </div>
                    <div >
                       ${t_10}
                       </div>
                </div>
            </div>
        </div>
`;
}
