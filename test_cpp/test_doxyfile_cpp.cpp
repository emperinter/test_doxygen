/**
 * @file test_doxyfile.py
 */

#ifndef AGX_DEMO_TEST_DOXYFILE_H
#define AGX_DEMO_TEST_DOXYFILE_H

namespace test_doxyfile_namspace {

    /**
     * @brief cpp中的结构体
     * @details test_doxyfile结构体
     */
    typedef struct {
        int a; /*!< 定义一个整型变量a */
        int b; /**< 定义一个整型变量b */
        int c; //!< 定义一个整型变量c
        int d; ///< 定义一个整型变量d
    } test_doxyfile_struct;

    /**
     * @brief cpp中的类
     * @details test_doxyfile_cpp 类
     */
    class test_doxyfile_cpp {
        int a; /*!< 定义一个整型变量a */
        int b; /**< 定义一个整型变量b */
        int c; //!< 定义一个整型变量c
        int d; ///< 定义一个整型变量d
    public:
        test_doxyfile_cpp(int a, int b);

        ~test_doxyfile_cpp();

        /**
         * @brief 加法【说明】
         * @param a public中add函数的参数a
         * @param b public中add函数的参数b【参数】
         * @return 计算后得到a+b的值【返回值描述】
         * @retval a+b【返回值】
         *
         *   uml 测试
         *   @startuml
         *   Alice -> Bob: test
         *   @enduml
         *
         *   markdown 测试
         *   ---
         *   # markdown test
         *   > echo hh
         *
         *   ```shell
         *   find . -name "*.cpp"
         *   ```
         */
        int add(int a, int b);

    private:
        /**
         * @brief
         * 除法
         * @param a private中add函数的参数a
         * @param b private中add函数的参数b
         * @return 返回a/b的值
         */
        int sub(int a, int b);

    protected:
        /**
         * @brief
         * 乘法
         * @param a protected中add函数的参数a
         * @param b protected中add函数的参数b
         * @return 返回a*b的值
         */
        int mul(int a, int b);
    };

}
#endif //AGX_DEMO_TEST_DOXYFILE_H
