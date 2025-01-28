import { useState, useEffect } from "react";

const MemberSave = () => {
    const [member, setMember] = useState({
        loginId: "",
        password: "",
        nationId: ""
    });
    const [nations, setNations] = useState([]);

    // 국가 데이터 불러오기
    useEffect(() => {
        const fetchNations = async () => {
            try {
                const response = await fetch("http://localhost:10000/api/nation");
                const data = await response.json();
                setNations(data);
            } catch (error) {
                console.error("국가 목록 조회 실패:", error);
            }
        };
        fetchNations();
    }, []);

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    };

    // 회원가입 처리
    const handleSave = async () => {
        try {
            const response = await fetch("http://localhost:10001/api/member", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(member)
            });

            if (response.ok) {
                alert("회원가입이 완료되었습니다!");
                setMember({ username: "", password: "", nationId: "" });
            }
        } catch (error) {
            console.error("회원가입 오류:", error);
            alert("회원가입에 실패했습니다.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>

            <div className="space-y-4">
                <input
                    type="text"
                    name="loginId"
                    className="border p-2 w-full rounded"
                    placeholder="아이디 입력"
                    value={member.loginId}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    className="border p-2 w-full rounded"
                    placeholder="비밀번호 입력"
                    value={member.password}
                    onChange={handleChange}
                />

                <select
                    name="nationId"
                    className="border p-2 w-full rounded"
                    value={member.nationId}
                    onChange={handleChange}
                >
                    <option value="">국가 선택</option>
                    {nations.map((nation) => (
                        <option key={nation.nationId} value={nation.nationId}>
                            {nation.name}
                        </option>
                    ))}
                </select>

                <button
                    onClick={handleSave}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default MemberSave;