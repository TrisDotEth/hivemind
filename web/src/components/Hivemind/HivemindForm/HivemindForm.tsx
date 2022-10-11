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
  const onSubmit = (data: FormHivemind) => {
    props.onSave(data, props?.hivemind?.id)
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
