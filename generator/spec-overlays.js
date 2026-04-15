/**
 * Per-endpoint patches applied to the HaloPSA OpenAPI spec before code
 * generation, for cases where the upstream spec is wrong or underspecified.
 *
 * Each key is "METHOD /path" and the value is a partial OpenAPI operation
 * object. The overlay is shallow-merged (Object.assign) into the operation,
 * so a `requestBody` overlay replaces any existing requestBody wholesale.
 * Deeper merge semantics can be added later if a future overlay needs it.
 */
module.exports = {
  // POST /Attachment is declared parameterless in the spec but actually
  // accepts Array<Attachment> with base64-encoded file bytes in the `data`
  // field. Confirmed empirically against turnops.halopsa.com. Same shape as
  // POST /Attachment/document.
  'POST /Attachment': {
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: { $ref: '#/components/schemas/Attachment' },
          },
        },
      },
    },
  },
}
