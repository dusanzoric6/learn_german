import json

doc_name = "USA_DL_2022"

needed_responses = [
    ("com.jumio.automation.client.classification.model.v2.ClassifyDocumentControllerResponseV2", "doc_classifier_response"),
    ("com.jumio.automation.client.rectification.model.v2.RectificationControllerResponseV2", "doc_rectifier_response"),
    ("com.jumio.automation.client.fieldfinding.model.v3.FieldMappingControllerResponseV3", "field_mapping_gcp_response"),
    # ("com.jumio.automation.client.rectification.model.v2.RectificationControllerResponseV2", "gcp_response"),
    # ("com.jumio.automation.client.rectification.model.v2.RectificationControllerResponseV2", "line_ocr_response"),
]

f = open('debugLog.json')

data = json.load(f)

for needed_response in needed_responses:
    response_data = data["resultMap"][needed_response[0]][0]
    print(response_data)

    with open(f'{doc_name}-{needed_response[1]}.json', 'w', encoding='utf-8') as f:
        json.dump(response_data, f, ensure_ascii=False, indent=4)

f.close()
