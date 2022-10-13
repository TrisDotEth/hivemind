import { useState } from 'react'

import { PickerInline } from 'filestack-react'
import type { EditHivemindById, UpdateHivemindInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormHivemind = NonNullable<EditHivemindById['hivemind']>

interface HivemindFormProps {
  hivemind?: EditHivemindById['hivemind']
  onSave: (data: UpdateHivemindInput, id?: FormHivemind['id']) => void
  error: RWGqlError
  loading: boolean
}

const HivemindForm = (props: HivemindFormProps) => {
  const [profileImageURL, setUrl] = useState(props?.hivemind?.profileImageURL)
  const onSubmit = (data: FormHivemind) => {
    const dataWithUrl = Object.assign(data, { profileImageURL })
    props.onSave(dataWithUrl, props?.hivemind?.id)
  }

  const onFileUpload = (response) => {
    setUrl(response.filesUploaded[0].url)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormHivemind> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.hivemind?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="profileImageURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile image url
        </Label>

        <TextField
          name="profileImageURL"
          defaultValue={props.hivemind?.profileImageURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="profileImageURL" className="rw-field-error" />

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload}
        />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default HivemindForm
