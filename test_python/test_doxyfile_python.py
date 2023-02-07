"""!
@file test_doxyfile.py
@brief 用于测试Doxygen生成规则
@details 细节
@author emperinter
@version 1.0
@date 2023/2/7 11:04
@copyright MIT
"""

class test_doxy_file_python(object):
    '''!
    @brief python中的类的brief
    @details python中的类的详细描述details
    '''
    def __init__(self, doxy_file):
        self.doxy_file = doxy_file

    def add(self, para1: int, para2: int):
        '''!
        @brief 加法
        @param para1 参数1
        @param para2 参数2
        @return para2+para2 计算结果
        @retval 0 计算成功
        @retval -1 计算失败

        uml 测试【不同类型（@/uml/markdown）注释之间直接最好空一行】
        @startuml
        Alice -> Bob: test
        @enduml

        markdown 测试
        ---
        # markdown test
        > echo hh

        - 1
        1中的数据
        - 2
        2中的数据
            - 21
            21中的数据

        - 3
        '''
        return para1 + para2
