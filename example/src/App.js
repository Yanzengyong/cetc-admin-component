import React from 'react'
import {
  Button,
  AdvanceBtn,
  Card,
  ChoiceTypeDialog,
  ColContent,
  CronGenerator,
  Ellipsis,
  IconFont,
  InfoBlock,
  InfoContainer,
  LoadingComponent,
  LogDialog,
  ModelCard,
  SimpleTag,
  UploadFormItem,
  DeleteNotice
} from 'cetc-admin-component'
import 'cetc-admin-component/dist/index.css'
import '@alifd/next/dist/next.css'

class App extends React.Component {
  state = {
    displayAdvance: false,
    visible: false,
    list: [
      {
        title: '业务模型部署',
        desc: '针对业务数据所构建的模型工程，需要定期执行去更新结果。支持拖拽式建模和NoteBook建模两种模型工程。',
        disable: false
      }, {
        title: '模型服务部署',
        desc: '针对算法模型所开发的服务接口，对外提供模型服务。支持机器学习和深度学习两种模型应用。',
        disable: false
      }
    ]
  }

  showAdvance = () => {
    this.setState({ displayAdvance: !this.state.displayAdvance})
  }
  onDeleteHandle = () => {
    DeleteNotice.show({
      message: '该数据删除后无法恢复',
      onCancel: () => {
        DeleteNotice.close()
      },
      onConfirm: () => {
        DeleteNotice.close()
      }
    })
  }
  render () {

    const { list, displayAdvance, visible } = this.state
  	return (
      <div>
        <Button onClick={() => { this.setState({ visible: !this.state.visible })}}/>
        <AdvanceBtn displayAdvance={displayAdvance} showAdvance={this.showAdvance} id="advanceBtn"/>
        <Card />
        <ChoiceTypeDialog typeList={list} />
        <ColContent />
        <CronGenerator />
        <Ellipsis text='dadasds'/>
        <IconFont type='iconfolder-open'/>
        <InfoBlock title='InfoBlock'>
          hhhhhhhhhhhhh
        </InfoBlock>
        <InfoContainer title='InfoContainer'>
          dassadsadsadsa
        </InfoContainer>
        <LoadingComponent />
        <LogDialog title='LogDialog' visible={visible}/>
        <ModelCard />
        <SimpleTag name='SimpleTag'/>
        <UploadFormItem />
        <button onClick={this.onDeleteHandle}>delete click</button>
      </div>
  	)
  }

}

export default App
